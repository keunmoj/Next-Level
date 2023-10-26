package com.ddoya.gateway.common.error;

import com.ddoya.gateway.common.error.exception.BaseException;
import com.ddoya.gateway.common.response.ErrorResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.web.reactive.error.ErrorWebExceptionHandler;
import org.springframework.core.ResolvableType;
import org.springframework.core.annotation.Order;
import org.springframework.core.codec.Hints;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.codec.json.Jackson2JsonEncoder;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

@Order(-1)
@Component
public class GlobalExceptionHandler implements ErrorWebExceptionHandler {

    private ObjectMapper objectMapper;

    public GlobalExceptionHandler(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    @Override
    public Mono<Void> handle(
        ServerWebExchange exchange, Throwable ex) {
        ServerHttpResponse response = exchange.getResponse();
        response.getHeaders().setContentType(MediaType.APPLICATION_JSON);

        if (ex instanceof BaseException) {
            response.setStatusCode(
                HttpStatus.valueOf(((BaseException) ex).getErrorCode().getStatus()));
            return response.writeWith(
                new Jackson2JsonEncoder(objectMapper).encode(
                    Mono.just(ErrorResponse.of(((BaseException) ex).getErrorCode())),
                    response.bufferFactory(),
                    ResolvableType.forInstance(
                        ErrorResponse.of(((BaseException) ex).getErrorCode())),
                    MediaType.APPLICATION_JSON,
                    Hints.from(Hints.LOG_PREFIX_HINT, exchange.getLogPrefix())
                )
            );
        } else {
            response.setStatusCode(HttpStatus.INTERNAL_SERVER_ERROR);
            return response.writeWith(
                new Jackson2JsonEncoder(objectMapper).encode(
                    Mono.just(ErrorResponse.of(ErrorCode.INTERNAL_SERVER_ERROR)),
                    response.bufferFactory(),
                    ResolvableType.forInstance(
                        ErrorResponse.of(ErrorCode.INTERNAL_SERVER_ERROR)),
                    MediaType.APPLICATION_JSON,
                    Hints.from(Hints.LOG_PREFIX_HINT, exchange.getLogPrefix())
                )
            );
        }
    }
}
