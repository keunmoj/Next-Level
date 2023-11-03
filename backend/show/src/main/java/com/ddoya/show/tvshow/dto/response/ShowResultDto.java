package com.ddoya.show.tvshow.dto.response;

import com.ddoya.show.common.entity.TvShow;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ShowResultDto {

    private Integer id;

    private String title;

    @Builder
    public ShowResultDto(TvShow tvShow) {
        this.id = tvShow.getId();
        this.title = tvShow.getTitle();
    }
}
