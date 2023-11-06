package com.ddoya.drama.drama.dto.response;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class DramaClipsResDto {

    private Integer size;
    private List<DramaClipResDto> problems;
}
