package com.ddoya.show.tvshow.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class EntireShowResultDto {

    private Integer size;
    private List<ShowResultDto> shows;
}
