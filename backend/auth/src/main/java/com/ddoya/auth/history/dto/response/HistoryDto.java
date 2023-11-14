package com.ddoya.auth.history.dto.response;

import com.ddoya.auth.history.entity.History;
import com.ddoya.auth.history.entity.ProblemType;
import com.ddoya.auth.history.vo.ProblemResVo;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(Include.NON_NULL)
public class HistoryDto {

    private Integer id;
    private LocalDate date;
    private String title;
    private String artist;
    private ProblemType problemType;
    private Integer score;
    private Integer hit;
    private String image;

    @Builder
    public HistoryDto(History history, ProblemResVo problemResVo) {
        this.id = problemResVo.getId();
        this.date = history.getDate();
        this.title = problemResVo.getTitle();
        this.artist = problemResVo.getArtist();
        this.problemType = history.getType();
        this.score = history.getScore();
        this.hit = problemResVo.getHit();
        this.image = problemResVo.getImage();
    }
}
