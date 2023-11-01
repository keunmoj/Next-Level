package com.ddoya.show.tvshow.dto;

import com.ddoya.show.common.entity.TvShow;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class EntireShowResultDto {

    private Integer size;
    private List<ShowResultDto> shows;
}
