package com.ddoya.show.common.dto;

import com.ddoya.show.common.dto.ShowClipDto;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class ShowClipsResultDto {

    private Integer size;

    private List<ShowClipDto> clips;

}
