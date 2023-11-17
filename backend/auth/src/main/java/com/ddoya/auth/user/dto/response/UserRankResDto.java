package com.ddoya.auth.user.dto.response;


import com.ddoya.auth.user.entity.Grade;
import com.ddoya.auth.user.entity.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@Builder(access = AccessLevel.PRIVATE)
@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public class UserRankResDto {

    private final String nickName;
    private final Integer score;
    private final String grade;
    private final String profileImageUrl;

    public static UserRankResDto from(User user, Grade grade) {
        return UserRankResDto.builder()
            .nickName(user.getNickName())
            .score(user.getScore())
            .grade(grade.getDescription())
            .profileImageUrl(user.getProfileImageUrl())
            .build();
    }
}
