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
    private List<SituationProblemScriptDto> scripts;

    @Builder
    public SituationProblemResultDto(Situation situation, SituationProblem situationProblem, List<SituationProblemScriptDto> scripts) {
        this.situationProblemId = situationProblem.getSituationProblemId();
        this.situationId = situation.getId();
        this.title = situation.getTitle();
        this.size = scripts.size();
        this.totalScore = situationProblem.getScore();
        this.scripts = scripts;
    }
}
