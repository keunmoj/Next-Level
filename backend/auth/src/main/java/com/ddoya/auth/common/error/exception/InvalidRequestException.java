package com.ddoya.auth.common.error.exception;

import com.ddoya.auth.common.error.ErrorCode;

public class InvalidRequestException extends BaseException {

    private final ErrorCode errorCode;

    public InvalidRequestException(ErrorCode errorCode) {
        super(errorCode);
        this.errorCode = errorCode;
    }
}
