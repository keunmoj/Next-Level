package com.ddoya.auth.common.util;

import com.ddoya.auth.common.error.ErrorCode;
import com.ddoya.auth.common.error.exception.AuthException;
import com.ddoya.auth.common.jwt.JwtTokenProvider;
import io.jsonwebtoken.Claims;
import java.time.Duration;
import java.util.Date;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class JwtService {

    private final JwtTokenProvider jwtTokenProvider;
    private final RedisService redisService;

    private static final String LOGOUT = "logout";

    public TokenInfo reissueToken(String requestAccessToken, String requestRefreshToken) {
        if (!jwtTokenProvider.validateTokenForReissue(requestAccessToken)) {
            throw new AuthException(ErrorCode.INVALID_ACCESS_TOKEN);
        }

        if (!jwtTokenProvider.validateToken(requestRefreshToken)) {
            throw new AuthException(ErrorCode.INVALID_REFRESH_TOKEN);
        }

        if (LOGOUT.equals(redisService.getValues(requestAccessToken))) {
            throw new AuthException(ErrorCode.LOGOUT_ACCESS_TOKEN);
        }

        Claims claims = jwtTokenProvider.getClaims(requestRefreshToken);
        String userId = claims.getSubject();
        if (Objects.isNull(redisService.getValues(userId))) {
            throw new AuthException(ErrorCode.REFRESH_TOKEN_NOT_FOUND);
        }

        Authentication authentication = jwtTokenProvider.getAuthentication(requestAccessToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        return jwtTokenProvider.reissueAccessToken(authentication);
    }

    public void logout(String userId, String accessToken, String refreshToken) {
        if (!jwtTokenProvider.validateToken(accessToken)) {
            throw new AuthException(ErrorCode.INVALID_ACCESS_TOKEN);
        }
        if (LOGOUT.equals(redisService.getValues(accessToken))) {
            throw new AuthException(ErrorCode.TOKEN_EXPIRED);
        }

        Long time = jwtTokenProvider.getTokenExpirationTime(accessToken) - new Date().getTime();

        redisService.setValues(accessToken, "logout", Duration.ofMillis(time));
        redisService.deleteValues(userId);
    }
}
