package com.ddoya.drama.common.response;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class ApiResponse<T> {

    private String message;
    private int status;
    private T data;

    @Builder
    public ApiResponse(String message, Integer status, T data) {
        this.message = message;
        this.status = status;
        this.data = data;
    }

}
