package com.ddoya.auth.user.dto.request;

import com.ddoya.auth.user.entity.Language;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;

@Getter
public class UpdateInformationRequestDto {

    @Size(min = 1, max = 8)
    @NotBlank
    private String nickName;

}
