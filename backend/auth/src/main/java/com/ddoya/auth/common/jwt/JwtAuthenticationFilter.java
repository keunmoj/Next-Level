package com.ddoya.auth.common.jwt;

import com.ddoya.auth.common.error.ErrorCode;
import com.ddoya.auth.common.error.exception.AuthException;
import com.ddoya.auth.common.util.RedisService;
import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

@Slf4j
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends GenericFilterBean {

    private final JwtTokenProvider jwtTokenProvider;
    private final RedisService redisService;

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse,
        FilterChain filterChain) throws IOException, ServletException {

        if (((HttpServletRequest) servletRequest).getRequestURI().equals("/auth/user/reissue")) {
            filterChain.doFilter(servletRequest, servletResponse);
            return;
        }

        // Request Header 에서 JWT Token 추출
        String token = jwtTokenProvider.resolveToken((HttpServletRequest) servletRequest);

        // validateToken 메서드로 토큰 유효성 검사
        if (redisService.isLogout(token)) {
            throw new AuthException(ErrorCode.LOGOUT_ACCESS_TOKEN);
        }

        if (token != null && jwtTokenProvider.validateToken(token)) {
            Authentication authentication = jwtTokenProvider.getAuthentication(token);
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        filterChain.doFilter(servletRequest, servletResponse);
    }
}
