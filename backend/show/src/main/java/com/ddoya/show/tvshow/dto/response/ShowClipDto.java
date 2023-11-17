package com.ddoya.show.tvshow.dto.response;

import com.ddoya.show.tvshow.entity.ShowProblem;
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
