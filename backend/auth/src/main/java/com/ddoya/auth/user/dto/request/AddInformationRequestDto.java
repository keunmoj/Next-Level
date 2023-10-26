package com.ddoya.auth.user.dto.request;

import javax.validation.constraints.Max;
import lombok.Getter;

@Getter
public class AddInformationRequestDto {

    @Max(8)
    private String nickName;
    private String language;
}
