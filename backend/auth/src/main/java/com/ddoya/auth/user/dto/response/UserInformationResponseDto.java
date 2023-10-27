package com.ddoya.auth.user.dto.response;

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
public class UserInformationResponseDto {

    private final String name;
    private final Language language;
    private final Integer score;
    private final LocalDate lastAttendanceDate;
    private final String nickName;
    private final String profileImageUrl;

    public static UserInformationResponseDto from(User user) {
        return UserInformationResponseDto.builder()
            .name(user.getName())
            .language(user.getLanguage())
            .score(user.getScore())
            .lastAttendanceDate(user.getLastAttendanceDate())
            .nickName(user.getNickName())
            .profileImageUrl(user.getProfileImageUrl())
            .build();
    }
}
