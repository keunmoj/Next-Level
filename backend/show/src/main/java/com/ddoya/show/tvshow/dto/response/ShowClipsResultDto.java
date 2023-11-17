package com.ddoya.show.tvshow.dto.response;

import com.ddoya.show.tvshow.dto.response.ShowClipDto;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class ShowClipsResultDto {

    private Integer size;
    private List<ShowClipDto> problems;

}
