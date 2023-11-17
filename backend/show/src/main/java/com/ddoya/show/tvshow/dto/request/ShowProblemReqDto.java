package com.ddoya.show.tvshow.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ShowProblemReqDto {

    @NotNull
    private Integer showProblemId;

}
