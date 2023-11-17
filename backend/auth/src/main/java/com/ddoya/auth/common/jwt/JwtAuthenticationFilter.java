package com.ddoya.auth.common.jwt;

import com.ddoya.auth.common.error.ErrorCode;
import com.ddoya.auth.common.error.exception.AuthException;
import com.ddoya.auth.common.util.RedisService;
import java.io.IOException;
import java.util.Arrays;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

@Slf4j
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtTokenProvider jwtTokenProvider;
    private final RedisService redisService;

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        String[] excludePath = {"/login/oauth2/**", "/oauth2/**", "/api/auth/user/reissue",
            "/api/auth/history/add", "/api/auth/history/recent-drama-problem", "/api/auth/history/recent-show-problem"};
        String path = request.getRequestURI();
        return Arrays.stream(excludePath).anyMatch(path::startsWith);
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
        FilterChain filterChain) throws ServletException, IOException {

        // Request Header 에서 JWT Token 추출
        String token = jwtTokenProvider.resolveToken(request);

        // validateToken 메서드로 토큰 유효성 검사
        if (redisService.isLogout(token)) {
            throw new AuthException(ErrorCode.LOGOUT_ACCESS_TOKEN);
        }

        if (token != null && jwtTokenProvider.validateToken(token)) {
            Authentication authentication = jwtTokenProvider.getAuthentication(token);
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        filterChain.doFilter(request, response);
    }
}
