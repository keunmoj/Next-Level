package com.ddoya.drama.drama.dto.response;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class DramaClipsResDto {

    private Integer size;
    private String title;
    private List<DramaClipResDto> problems;

    public DramaClipsResDto(Integer size, List<DramaClipResDto> problems) {
        this.size = size;
        this.title = null;
        this.problems = problems;
    }
}
