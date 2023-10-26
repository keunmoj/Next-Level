package com.ddoya.gateway.common.filter;

import com.ddoya.gateway.common.error.ErrorCode;
import com.ddoya.gateway.common.error.exception.AuthException;
import com.ddoya.gateway.common.util.JwtUtil;
import com.ddoya.gateway.common.util.RedisUtil;
import io.jsonwebtoken.Claims;
import java.nio.charset.StandardCharsets;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

@Component
public class AuthorizationHeaderFilter extends
    AbstractGatewayFilterFactory<AuthorizationHeaderFilter.Config> {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private RedisUtil redisUtil;

    public AuthorizationHeaderFilter() {
        super(Config.class);
    }

    public static class Config {

    }

    @Override
    public GatewayFilter apply(Config config) {
        return (exchange, chain) -> {
            String token = jwtUtil.resolveToken(exchange.getRequest());   // 헤더의 토큰 파싱 (Bearer 제거)

            // 토큰 유효성 검사
            if (redisUtil.isLogout(token)) {
                throw new AuthException(ErrorCode.LOGOUT_ACCESS_TOKEN);
            }

            if (token != null && jwtUtil.validateToken(token)) {
                Claims claims = jwtUtil.getClaims(token);
                String userId = claims.getSubject();

                addAuthorizationHeaders(exchange.getRequest(), userId);

                return chain.filter(exchange);
            } else {
                throw new AuthException(ErrorCode.INVALID_ACCESS_TOKEN);
            }
        };
    }

    // 성공적으로 검증이 되었기 때문에 인증된 헤더로 요청을 변경해준다. 서비스는 해당 헤더에서 아이디를 가져와 사용한다.
    private void addAuthorizationHeaders(ServerHttpRequest request, String userId) {
        request.mutate()
            .header("X-Authorization-Id", userId)
            .build();
    }

    private Mono<Void> onError(ServerHttpResponse response, String message, HttpStatus status) {
        response.setStatusCode(status);
        DataBuffer buffer = response.bufferFactory().wrap(message.getBytes(StandardCharsets.UTF_8));
        return response.writeWith(Mono.just(buffer));
    }
}
