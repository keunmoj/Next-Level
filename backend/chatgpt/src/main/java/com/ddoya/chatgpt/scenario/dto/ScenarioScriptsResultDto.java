package com.ddoya.chatgpt.scenario.dto;

import com.ddoya.chatgpt.scenario.entity.Situation;
import com.ddoya.chatgpt.scenario.entity.SituationScript;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

import java.util.List;

@Data
public class ScenarioScriptsResultDto {

    Integer id;
    String title;
    Integer size;
    List<SituationScript> scripts;

}
