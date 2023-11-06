package com.ddoya.chatgpt.scenario.dto.response;

import com.ddoya.chatgpt.scenario.entity.SituationScript;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ScenarioScriptDto {

    private Integer scriptNumber;
    private String script;

    public ScenarioScriptDto(SituationScript situationScript) {
        this.scriptNumber = situationScript.getScriptNumber();
        this.script = situationScript.getScript();

    }
}
