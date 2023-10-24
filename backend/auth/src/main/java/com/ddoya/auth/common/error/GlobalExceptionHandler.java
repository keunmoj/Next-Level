package com.ddoya.auth.common.error;

import com.ddoya.auth.common.error.exception.BaseException;
import com.ddoya.auth.common.response.ErrorResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleServerException(Exception e) {
        return handleException(e, ErrorCode.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(BaseException.class)
    public ResponseEntity<ErrorResponse> handleBaseException(BaseException e) {
        return handleException(e, e.getErrorCode());
    }

    private ResponseEntity<ErrorResponse> handleException(Exception e, ErrorCode errorCode) {
        ErrorResponse errorResponse = ErrorResponse.of(errorCode);
        return ResponseEntity.status(errorResponse.getStatus()).body(errorResponse);
    }
}
