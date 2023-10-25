package com.ddoya.gateway.common.error.exception;

import com.ddoya.gateway.common.error.ErrorCode;

public class AuthException extends BaseException {

    private final ErrorCode errorCode;

    public AuthException(ErrorCode errorCode) {
        super(errorCode);
        this.errorCode = errorCode;
    }
}
