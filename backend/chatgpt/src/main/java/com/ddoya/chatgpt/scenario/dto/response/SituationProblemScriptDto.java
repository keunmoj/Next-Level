package com.ddoya.chatgpt.scenario.dto.response;

import com.ddoya.chatgpt.scenario.entity.SituationProblemScript;
import com.ddoya.chatgpt.scenario.entity.SituationScript;
import lombok.Data;

@Data
public class SituationProblemScriptDto {
    private Integer scriptNumber;
    private String script;
    private Integer score;

    public SituationProblemScriptDto(SituationProblemScript situationProblemScript) {
        this.scriptNumber = situationProblemScript.getScriptNumber();
        this.script = situationProblemScript.getScript();
        this.score = situationProblemScript.getScore();
    }
}
