package com.ddoya.auth.user.entity;

import java.util.stream.Stream;
import lombok.Getter;

@Getter
public enum Grade {

    CHALLENGER("챌린저", -1, -1),
    RUBY("루비", 10000, Integer.MAX_VALUE),
    DIA("다이아", 5000, 9999),
    PLATINUM("플래티넘", 3000, 4999),
    GOLD("골드", 1000, 2999),
    SILVER("실버", 300, 999),
    BRONZE("브론즈", 0, 299);

    private final String description;
    private final Integer min;
    private final Integer max;

    Grade(String description, Integer min, Integer max) {
        this.description = description;
        this.min = min;
        this.max = max;
    }

    public static Grade getGrade(Integer score) {
        return Stream.of(Grade.values())
            .filter(grade -> score >= grade.min && score <= grade.max)
            .findFirst()
            .orElse(null);
    }
}
