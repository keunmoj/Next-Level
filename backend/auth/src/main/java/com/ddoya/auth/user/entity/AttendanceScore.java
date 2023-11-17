package com.ddoya.auth.user.entity;

import java.util.stream.Stream;
import lombok.Getter;

@Getter
public enum AttendanceScore {
    NORMAL(-1, 5), SEVEN(7, 15), TWENTY_EIGHT(28, 100);

    private Integer days;
    private Integer score;

    AttendanceScore(Integer days, Integer score) {
        this.days = days;
        this.score = score;
    }

    public static AttendanceScore getScore(Integer days) {
        return Stream.of(AttendanceScore.values())
            .filter(attendanceScore -> attendanceScore.getDays().equals(days))
            .findFirst()
            .orElse(null);
    }
}
