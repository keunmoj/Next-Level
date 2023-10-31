package com.ddoya.show.tvshow.dto;

import com.ddoya.show.common.entity.TvShow;
import lombok.Data;

import java.util.List;

@Data
public class EntireShowResultDto {

    int result;

    int showCnt;

    List<TvShow> entireShowList;
}
