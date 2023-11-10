package com.ddoya.chatgpt.scenario.dto.response;

import com.ddoya.chatgpt.scenario.entity.Situation;
import com.ddoya.chatgpt.scenario.entity.SituationProblem;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
public class SituationProblemResultDto {

    private Integer situationProblemId;
    private Integer situationId;
    private String title;
    private Integer size;
    private Integer totalScore;
    private List<SituationProblemScriptResultDto> results;

    @Builder
    public SituationProblemResultDto(Situation situation, SituationProblem situationProblem, List<SituationProblemScriptResultDto> results) {
        this.situationProblemId = situationProblem.getSituationProblemId();
        this.situationId = situation.getId();
        this.title = situation.getTitle();
        this.size = results.size();
        this.totalScore = situationProblem.getScore();
        this.results = results;
    }
}
