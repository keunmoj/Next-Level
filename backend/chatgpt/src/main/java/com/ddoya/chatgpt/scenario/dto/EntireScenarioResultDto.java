package com.ddoya.chatgpt.scenario.dto;

import com.ddoya.chatgpt.scenario.entity.Situation;
import lombok.Data;

import java.util.List;

@Data
public class EntireScenarioResultDto {

    Integer size;
    List<Situation> scenarios;
}
