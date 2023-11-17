package com.ddoya.auth.common.util;

import com.ddoya.auth.history.entity.ProblemType;
import org.springframework.core.convert.converter.Converter;

public class ProblemTypeConverter implements Converter<String, ProblemType> {

    @Override
    public ProblemType convert(String problemType) {
        return ProblemType.of(problemType);
    }
}
