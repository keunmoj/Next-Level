package com.ddoya.auth.common.jwt;

import com.ddoya.auth.common.error.ErrorCode;
import com.ddoya.auth.common.error.exception.AuthException;
import com.ddoya.auth.common.oauth.CustomUserDetails;
import com.ddoya.auth.common.util.RedisService;
import com.ddoya.auth.common.util.TokenInfo;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.time.Duration;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;
import javax.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

@Slf4j
@Component
public class JwtTokenProvider {

    @Value("${app.auth.tokenExpiry}")
    private Long accessTokenExpireTime;

    @Value("${app.auth.refreshTokenExpiry}")
    private Long refreshTokenExpireTime;
    private static final String AUTHORIZATION_HEADER = "Authorization";
    private static final String AUTHORITIES_KEY = "auth";
    private static final String BEARER_TYPE = "Bearer";
    private static final String TYPE_ACCESS = "access";
    private static final String TYPE_REFRESH = "refresh";

    private final Key key;
    private final RedisService redisService;

    public JwtTokenProvider(@Value("${jwt.secret}") String secretKey, RedisService redisService) {
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        this.key = Keys.hmacShaKeyFor(keyBytes);
        this.redisService = redisService;
    }

    public TokenInfo generateToken(Authentication authentication) {
        CustomUserDetails user = (CustomUserDetails) authentication.getPrincipal();
        return generateToken(user, authentication.getAuthorities());
    }

    public TokenInfo generateToken(CustomUserDetails customUserDetails,
        Collection<? extends GrantedAuthority> inputAuthorities) {
        String authorities = inputAuthorities.stream()
            .map(GrantedAuthority::getAuthority)
            .collect(Collectors.joining(","));

        Date now = new Date();

        //Generate AccessToken
        String accessToken = Jwts.builder()
            .setSubject(customUserDetails.getName())
            .claim("type", TYPE_ACCESS)
            .claim(AUTHORITIES_KEY, authorities)
            .claim("email", customUserDetails.getEmail())
            .setIssuedAt(now)
            .setExpiration(
                new Date(now.getTime() + accessTokenExpireTime))
            .signWith(key, SignatureAlgorithm.HS256)
            .compact();

        //Generate RefreshToken
        String refreshToken = Jwts.builder()
            .setSubject(customUserDetails.getName())
            .claim("type", TYPE_REFRESH)
            .claim(AUTHORITIES_KEY, authorities)
            .claim("email", customUserDetails.getEmail())
            .setIssuedAt(now)
            .setExpiration(
                new Date(now.getTime() + refreshTokenExpireTime))
            .signWith(key, SignatureAlgorithm.HS256)
            .compact();

        redisService.setValues(customUserDetails.getName(), refreshToken,
            Duration.ofSeconds(getTokenExpirationTime(refreshToken)));

        return TokenInfo.builder()
            .grantType(BEARER_TYPE)
            .accessToken(accessToken)
            .accessTokenExpirationTime(accessTokenExpireTime)
            .refreshToken(refreshToken)
            .refreshTokenExpirationTime(refreshTokenExpireTime)
            .build();
    }

    public TokenInfo reissueAccessToken(Authentication authentication) {
        CustomUserDetails customUserDetails = (CustomUserDetails) authentication.getPrincipal();
        Collection<? extends GrantedAuthority> inputAuthorities = authentication.getAuthorities();

        String authorities = inputAuthorities.stream()
            .map(GrantedAuthority::getAuthority)
            .collect(Collectors.joining(","));

        Date now = new Date();

        //Generate AccessToken
        String accessToken = Jwts.builder()
            .setSubject(customUserDetails.getName())
            .claim("type", TYPE_ACCESS)
            .claim(AUTHORITIES_KEY, authorities)
            .claim("email", customUserDetails.getEmail())
            .setIssuedAt(now)
            .setExpiration(
                new Date(now.getTime() + accessTokenExpireTime))
            .signWith(key, SignatureAlgorithm.HS256)
            .compact();

        return TokenInfo.builder()
            .grantType(BEARER_TYPE)
            .accessToken(accessToken)
            .accessTokenExpirationTime(accessTokenExpireTime)
            .build();
    }

    public Authentication getAuthentication(String token) {
        Claims claims = getClaims(token);

        if (claims.get(AUTHORITIES_KEY) == null) {
            throw new AuthException(ErrorCode.NO_AUTHORITY_TOKEN);
        }

        Collection<? extends GrantedAuthority> authorities =
            Arrays.stream(claims.get(AUTHORITIES_KEY).toString().split(","))
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());

        CustomUserDetails principal = new CustomUserDetails(Long.valueOf(claims.getSubject()),
            (String) claims.get("email"), authorities);
        return new UsernamePasswordAuthenticationToken(principal, "", authorities);
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            return true;
        } catch (SecurityException | MalformedJwtException e) {
            log.info("Invalid JWT Token", e);
        } catch (ExpiredJwtException e) {
            log.info("Expired JWT Token", e);
            throw new AuthException(ErrorCode.TOKEN_EXPIRED);
        } catch (UnsupportedJwtException e) {
            log.info("Unsupported JWT Token", e);
        } catch (IllegalArgumentException e) {
            log.info("JWT claims string is empty.", e);
        }
        return false;
    }

    public boolean validateTokenForReissue(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            return true;
        } catch (SecurityException | MalformedJwtException e) {
            log.info("Invalid JWT Token", e);
        } catch (ExpiredJwtException e) {
            log.info("Expired JWT Token", e);
            return true;
        } catch (UnsupportedJwtException e) {
            log.info("Unsupported JWT Token", e);
        } catch (IllegalArgumentException e) {
            log.info("JWT claims string is empty.", e);
        }
        return false;
    }

    public Claims getClaims(String token) {
        try {
            return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token)
                .getBody();
        } catch (ExpiredJwtException e) {
            return e.getClaims();
        }
    }

    public String resolveToken(HttpServletRequest request) {
        String bearerToken = request.getHeader(AUTHORIZATION_HEADER);
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith(BEARER_TYPE)) {
            return bearerToken.substring(7);
        }
        return null;
    }

    public Long getTokenExpirationTime(String token) {
        return getClaims(token).getExpiration().getTime();
    }

    public String getEmail(String token) {
        return (String) getClaims(token).get("email");
    }

}
