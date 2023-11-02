package com.ddoya.gateway.common.error;

import java.util.Collections;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCode {
    INTERNAL_SERVER_ERROR(500, "서버에 문제가 생겼습니다."),

    INVALID_ACCESS_TOKEN(403, "유효하지 않은 엑세스 토큰입니다."),
    LOGOUT_ACCESS_TOKEN(403, "로그아웃된 엑세스 토큰입니다."),
    TOKEN_EXPIRED(401, "이미 만료된 토큰입니다."),
    HEADER_NOT_FOUND(400, "인증 헤더를 찾을 수 없습니다.");

    private int status;
    private String message;

    private static final Map<String, ErrorCode> messageMap = Collections.unmodifiableMap(
        Stream.of(values()).collect(
            Collectors.toMap(ErrorCode::getMessage, Function.identity())));

    public static ErrorCode fromMessage(String message) {
        return messageMap.get(message);
    }
}
