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
    INVALID_ACCESS_TOKEN(403, "유효하지 않은 엑세스 토큰입니다."),
    LOGOUT_ACCESS_TOKEN(403, "로그아웃된 엑세스 토큰입니다."),
    INVALID_REFRESH_TOKEN(403, "유효하지 않은 리프레시 토큰입니다."),
    TOKEN_EXPIRED(401, "이미 만료된 토큰입니다."),
    RESOURCE_PERMISSION_DENIED(400, "해당 리소스에 대한 작업 권한이 없습니다."),
    UNAUTHORIZED_REDIRECT_URI(400, "Unauthorized Redirect URI."),
    REFRESH_TOKEN_NOT_FOUND(400, "리프레시 토큰을 찾을 수 없습니다."),
    USER_NOT_FOUND(404, "해당 유저를 찾을 수 없습니다."),

    ALREADY_ATTENDED(400, "오늘은 이미 출석했습니다."),
    INVALID_PROBLEM_TYPE(400, "올바르지 않은 문제 타입입니다."),
    INVALID_ORDER_TYPE(400, "올바르지 않은 정렬 타입입니다."),
    INVALID_PROBLEM_ORDER_TYPE(400, "올바르지 않은 문제 및 정렬 타입입니다."),

    AMAZON_S3_ERROR(400, "AWS S3와의 통신에 문제가 생겼습니다."),
    HISTORY_NOT_FOUND(404, "문제 풀이 내역을 찾을 수 없습니다."),

    ALREADY_USING_NICKNAME(409, "이미 사용중인 닉네임입니다.");

    private int status;
    private String message;

    private static final Map<String, ErrorCode> messageMap = Collections.unmodifiableMap(
        Stream.of(values()).collect(
            Collectors.toMap(ErrorCode::getMessage, Function.identity())));

    public static ErrorCode fromMessage(String message) {
        return messageMap.get(message);
    }
}
