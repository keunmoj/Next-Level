package com.ddoya.chatgpt.scenario.dto;

import com.ddoya.chatgpt.scenario.entity.SituationScript;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Data
public class ScenarioScriptDto {

    Integer scriptNumber;
    String script;

}
