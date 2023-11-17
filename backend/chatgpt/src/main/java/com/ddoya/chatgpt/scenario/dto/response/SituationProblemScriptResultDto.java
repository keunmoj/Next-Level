package com.ddoya.chatgpt.scenario.dto.response;

import com.ddoya.chatgpt.scenario.entity.SituationProblemScript;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SituationProblemScriptResultDto {

    private Integer scriptNumber;
    private String script;
    private Integer score;

//    public SituationProblemScriptResultDto(Integer scriptNumber, String script, Integer score) {
//        this.scriptNumber = scriptNumber;
//        this.script = script;
//        this.score = score;
//    }
}
