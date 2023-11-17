package com.ddoya.auth.common.error.exception;

import com.ddoya.auth.common.error.ErrorCode;

public class AWSException extends BaseException {

    private final ErrorCode errorCode;

    public AWSException(ErrorCode errorCode) {
        super(errorCode);
        this.errorCode = errorCode;
    }
}
