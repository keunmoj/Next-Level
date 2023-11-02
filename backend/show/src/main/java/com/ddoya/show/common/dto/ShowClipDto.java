package com.ddoya.show.common.dto;

import com.ddoya.show.common.entity.ShowProblem;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ShowClipDto {

    private Integer id;
    private String title;
    private Integer hit;
    private String image;

    @Builder
    public ShowClipDto(ShowProblem showProblem) {
        this.id = showProblem.getId();
        this.title = showProblem.getTitle();
        this.hit = showProblem.getHit();
        this.image = showProblem.getImage();
    }
}
