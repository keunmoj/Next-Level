package com.ddoya.drama.drama.dto.request;

import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class DramaProblemReqDto {

    @NotNull
    private Integer dramaProblemId;

}
