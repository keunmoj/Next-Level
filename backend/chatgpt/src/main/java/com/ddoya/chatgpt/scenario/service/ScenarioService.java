package com.ddoya.chatgpt.scenario.service;

import com.ddoya.chatgpt.scenario.dto.EntireScenarioResultDto;
import com.ddoya.chatgpt.scenario.dto.ScenarioScriptsResultDto;

public interface ScenarioService {
    EntireScenarioResultDto getEntireScenarioList();

    ScenarioScriptsResultDto getScenarioScripts(Integer scenarioId);

}
