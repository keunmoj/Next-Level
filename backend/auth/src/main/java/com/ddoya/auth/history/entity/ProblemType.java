package com.ddoya.auth.history.entity;

import com.ddoya.auth.common.error.ErrorCode;
import com.ddoya.auth.common.error.exception.InvalidRequestException;
import java.util.stream.Stream;
import lombok.Getter;

@Getter
public enum ProblemType {

    DRAMA, SHOW, SONG, SITUATION;

    public static ProblemType of(String problemType) {
        return Stream.of(ProblemType.values())
            .filter(type -> type.name().equalsIgnoreCase(problemType))
            .findFirst()
            .orElseThrow(() -> new InvalidRequestException(ErrorCode.INVALID_PROBLEM_TYPE));
    }

}
