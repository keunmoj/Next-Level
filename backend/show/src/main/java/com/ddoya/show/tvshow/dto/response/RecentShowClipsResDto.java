package com.ddoya.show.tvshow.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class RecentShowClipsResDto {

    private Integer size;
    private String title;
    private List<ShowClipDto> problems;
}
