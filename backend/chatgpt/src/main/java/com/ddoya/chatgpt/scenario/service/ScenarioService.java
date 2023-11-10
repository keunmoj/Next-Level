package com.ddoya.chatgpt.scenario.service;

import com.ddoya.chatgpt.scenario.dto.request.SituationProblemReqDto;
import com.ddoya.chatgpt.scenario.dto.response.EntireScenarioResultDto;
import com.ddoya.chatgpt.scenario.dto.response.SituationProblemResultDto;
import com.ddoya.chatgpt.scenario.dto.response.ScenarioScriptsResultDto;
import com.ddoya.chatgpt.scenario.dto.response.SituationProblemsResDto;
import java.util.List;

public interface ScenarioService {
    EntireScenarioResultDto getEntireScenarioList();

    ScenarioScriptsResultDto getScenarioScripts(Integer scenarioId);

    Integer addSituationProblemScore(Integer userId, SituationProblemReqDto situationProblemReqDto);

    SituationProblemResultDto getScenarioProblemResult(Integer situationProblemId);

    SituationProblemsResDto getSituationClips(List<Integer> problemIds);
}
