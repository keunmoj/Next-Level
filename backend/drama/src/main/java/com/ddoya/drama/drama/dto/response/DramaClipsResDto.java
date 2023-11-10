package com.ddoya.drama.drama.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(Include.NON_NULL)
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
