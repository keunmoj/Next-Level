package com.ddoya.auth.user.entity;

import java.util.stream.Stream;
import lombok.Getter;

@Getter
public enum Grade {

    CHALLENGER("Challenger", -1, -1),
    RUBY("Ruby", 10000, Integer.MAX_VALUE),
    DIA("Diamond", 5000, 9999),
    PLATINUM("Platinum", 3000, 4999),
    GOLD("Gold", 1000, 2999),
    SILVER("Silver", 300, 999),
    BRONZE("Bronze", 0, 299);

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
