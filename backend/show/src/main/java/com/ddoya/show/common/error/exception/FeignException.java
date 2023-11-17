package com.ddoya.show.common.error.exception;

import lombok.Getter;

@Getter
public class FeignException extends RuntimeException {

    private Integer status;
    private String message;

    public FeignException(Integer status, String message) {
        super(message);
        this.status = status;
        this.message = message;
    }
}
