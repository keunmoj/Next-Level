package com.ddoya.auth.user.dto.response;

import com.ddoya.auth.user.entity.Grade;
import com.ddoya.auth.user.entity.Language;
import com.ddoya.auth.user.entity.User;
import java.time.LocalDate;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@Builder(access = AccessLevel.PRIVATE)
@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public class UserInformationResDto {

    private final String name;
    private final Language language;
    private final Integer score;
    private final String grade;
    private final LocalDate lastAttendanceDate;
    private final Integer consecutiveAttendanceDays;
    private final String nickName;
    private final String profileImageUrl;

    public static UserInformationResDto from(User user, Grade grade) {
        return UserInformationResDto.builder()
            .name(user.getName())
            .language(user.getLanguage())
            .score(user.getScore())
            .grade(grade.getDescription())
            .lastAttendanceDate(user.getLastAttendanceDate())
            .consecutiveAttendanceDays(user.getConsecutiveAttendanceDays())
            .nickName(user.getNickName())
            .profileImageUrl(user.getProfileImageUrl())
            .build();
    }
}
