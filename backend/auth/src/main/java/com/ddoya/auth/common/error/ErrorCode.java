package com.ddoya.auth.common.error;

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

    OAUTH_EMAIL_REQUIRED(500, "OAuth email을 수집하는데 실패하였습니다."),
    NO_AUTHORITY_TOKEN(500, "권한 정보가 없는 토큰입니다."),
    INVALID_ACCESS_TOKEN(500, "유효하지 않은 엑세스 토큰입니다."),
    INVALID_REFRESH_TOKEN(500, "유효하지 않은 리프레시 토큰입니다."),
    TOKEN_EXPIRED(500, "이미 만료된 토큰입니다."),
    RESOURCE_PERMISSION_DENIED(400, "해당 리소스에 대한 작업 권한이 없습니다."),
    UNAUTHORIZED_REDIRECT_URI(400, "Unauthorized Redirect URI."),
    REFRESH_TOKEN_NOT_FOUND(500, "리프레시 토큰을 찾을 수 없습니다."),
    USER_NOT_FOUND(404, "해당 유저를 찾을 수 없습니다.");

    private int status;
    private String message;

    private static final Map<String, ErrorCode> messageMap = Collections.unmodifiableMap(
        Stream.of(values()).collect(
            Collectors.toMap(ErrorCode::getMessage, Function.identity())));

    public static ErrorCode fromMessage(String message) {
        return messageMap.get(message);
    }
}
