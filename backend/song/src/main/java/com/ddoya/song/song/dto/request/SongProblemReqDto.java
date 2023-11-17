package com.ddoya.song.song.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class SongProblemReqDto {

    @NotNull
    private Integer songProblemId;

    @Min(0)
    @Max(30)
    private Integer score;

}
