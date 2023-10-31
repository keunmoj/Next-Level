package com.ddoya.show.tvshow.dto;

import com.ddoya.show.common.dto.ClipDto;
import com.ddoya.show.common.entity.ShowProblem;
import lombok.Data;

import java.util.List;

@Data
public class ShowClipResultDto {

    int result;

    int clipCnt;

    List<ClipDto> entireClipList;

}
