package com.ddoya.chatgpt.scenario.dto.response;

import com.ddoya.chatgpt.scenario.dto.response.ScenarioScriptDto;
import com.ddoya.chatgpt.scenario.entity.Situation;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class ScenarioScriptsResultDto {

    private Integer id;
    private String title;
    private Integer size;
    private List<ScenarioScriptDto> scripts;

    @Builder
    public ScenarioScriptsResultDto(Situation situation, List<ScenarioScriptDto> scripts) {
        this.id = situation.getId();
        this.title = situation.getTitle();
        this.size = scripts.size();
        this.scripts = scripts;

    }
}
