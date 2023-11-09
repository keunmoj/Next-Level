package com.ddoya.show.tvshow.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;

@Getter
@AllArgsConstructor
public class HistoryReqDto {

    private Integer userId;
    private Integer problemId;
    private String type;
    private LocalDate date;
    private Integer score;

    @Builder
    public HistoryReqDto(Integer userId, ShowProblemReqDto showProblemReqDto) {
        this.userId = userId;
        this.problemId = showProblemReqDto.getShowProblemId();
        this.type = "SHOW";
        this.date = LocalDate.now();
        this.score = 10;
    }
}
