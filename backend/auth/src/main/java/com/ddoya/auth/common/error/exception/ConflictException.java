package com.ddoya.auth.common.error.exception;

import com.ddoya.auth.common.error.ErrorCode;

public class ConflictException extends BaseException {

    private final ErrorCode errorCode;

    public ConflictException(ErrorCode errorCode) {
        super(errorCode);
        this.errorCode = errorCode;
    }
}
