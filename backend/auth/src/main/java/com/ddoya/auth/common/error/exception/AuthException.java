package com.ddoya.auth.common.error.exception;

import com.ddoya.auth.common.error.ErrorCode;

public class AuthException extends BaseException {

    private final ErrorCode errorCode;

    public AuthException(ErrorCode errorCode) {
        super(errorCode);
        this.errorCode = errorCode;
    }
}
