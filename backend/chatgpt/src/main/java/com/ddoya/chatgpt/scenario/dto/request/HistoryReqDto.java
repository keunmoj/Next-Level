package com.ddoya.chatgpt.scenario.dto.request;

import com.ddoya.chatgpt.scenario.entity.SituationProblem;
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
    public HistoryReqDto(Integer userId, SituationProblem situationProblem) {
        this.userId = userId;
        this.problemId = situationProblem.getSituationProblemId();
        this.type = "SITUATION";
        this.date = LocalDate.now();
        this.score = situationProblem.getScore();
    }
}
