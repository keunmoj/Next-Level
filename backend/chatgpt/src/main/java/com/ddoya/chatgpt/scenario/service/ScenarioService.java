package com.ddoya.chatgpt.scenario.service;

import com.ddoya.chatgpt.scenario.dto.request.SituationProblemReqDto;
import com.ddoya.chatgpt.scenario.dto.response.EntireScenarioResultDto;
import com.ddoya.chatgpt.scenario.dto.response.ScenarioScriptsResultDto;

public interface ScenarioService {
    EntireScenarioResultDto getEntireScenarioList();

    ScenarioScriptsResultDto getScenarioScripts(Integer scenarioId);

    void addSituationProblemScore(Integer userId, SituationProblemReqDto situationProblemReqDto);

}
