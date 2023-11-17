package com.ddoya.drama.common.error.exception;

import com.ddoya.drama.common.error.ErrorCode;
import lombok.Getter;

@Getter
public class NotFoundException extends BaseException {

    private ErrorCode errorCode;

    public NotFoundException(ErrorCode errorCode) {
        super(errorCode);
        this.errorCode = errorCode;
    }
}
