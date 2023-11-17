package com.ddoya.auth.common.error.exception;

import com.ddoya.auth.common.error.ErrorCode;

public class NotFoundException extends BaseException {

    private final ErrorCode errorCode;

    public NotFoundException(ErrorCode errorCode) {
        super(errorCode);
        this.errorCode = errorCode;
    }

}
