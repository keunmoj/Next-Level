package com.ddoya.show.common.error;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Collections;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Getter
@AllArgsConstructor
public enum ErrorCode {

    INTERNAL_SERVER_ERROR(500, "서버에 문제가 생겼습니다."),

    SHOW_PROBLEM_NOT_FOUND(404, "해당 문제를 찾을 수 없습니다."),

    SHOW_NOT_FOUND(404, "예능 목록을 찾을 수 없습니다.");

    private Integer status;
    private String message;

    private static final Map<String, ErrorCode> messageMap = Collections.unmodifiableMap(
            Stream.of(values()).collect(
                    Collectors.toMap(ErrorCode::getMessage, Function.identity())));

    public static ErrorCode fromMessage(String message) {
        return messageMap.get(message);
    }
}
