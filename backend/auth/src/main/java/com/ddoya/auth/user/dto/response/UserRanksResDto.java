package com.ddoya.auth.user.dto.response;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserRanksResDto {

    private List<UserRankResDto> rankedUsers;
    private UserRankResDto user;
}
