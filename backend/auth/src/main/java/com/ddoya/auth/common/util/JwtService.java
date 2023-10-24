package com.ddoya.auth.common.util;

import com.ddoya.auth.common.error.ErrorCode;
import com.ddoya.auth.common.error.exception.AuthException;
import com.ddoya.auth.common.jwt.JwtTokenProvider;
import java.time.Duration;
import java.util.Date;
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
        if (!jwtTokenProvider.validateToken(requestAccessToken)) {
            throw new AuthException(ErrorCode.INVALID_ACCESS_TOKEN);
        }

        if (!jwtTokenProvider.validateToken(requestRefreshToken)) {
            throw new AuthException(ErrorCode.INVALID_REFRESH_TOKEN);
        }

        if (LOGOUT.equals(redisService.getValues(requestAccessToken))) {
            throw new AuthException(ErrorCode.TOKEN_EXPIRED);
        }

        Authentication authentication = jwtTokenProvider.getAuthentication(requestAccessToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        return jwtTokenProvider.generateToken(authentication);
    }

    public void logout(String userEmail, String accessToken, String refreshToken) {
        if (!jwtTokenProvider.validateToken(accessToken)) {
            throw new AuthException(ErrorCode.INVALID_ACCESS_TOKEN);
        }
        if (LOGOUT.equals(redisService.getValues(accessToken))) {
            throw new AuthException(ErrorCode.TOKEN_EXPIRED);
        }

        Long time = jwtTokenProvider.getTokenExpirationTime(accessToken) - new Date().getTime();

        redisService.setValues(accessToken, "logout", Duration.ofMillis(time));
        redisService.deleteValues(userEmail);
    }
}
