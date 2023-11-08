package com.ddoya.show.tvshow.dto.response;

import com.ddoya.show.tvshow.entity.ShowProblem;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ShowProblemResultDto {

    private Integer id;
    private String title;
    private Integer hit;
    private String clipStartTime;
    private String clipEndTime;
    private String videoId;
    private String artistName;
    private String script;
    private String notation;
    private String startTime;
    private String explain;

    @Builder
    public ShowProblemResultDto(ShowProblem showProblem) {
        this.id = showProblem.getId();
        this.title = showProblem.getTitle();
        this.hit = showProblem.getHit();
        this.clipStartTime = showProblem.getClipStartTime();
        this.clipEndTime = showProblem.getClipEndTime();
        this.videoId = showProblem.getVideoId();
        this.artistName = showProblem.getArtist().getArtistName();
        this.script = showProblem.getScript();
        this.notation = showProblem.getNotation();
        this.startTime = showProblem.getStartTime();
        this.explain = showProblem.getExplain();
    }
}
