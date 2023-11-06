package com.ddoya.chatgpt.scenario.service;

import com.ddoya.chatgpt.global.client.AuthServiceClient;
import com.ddoya.chatgpt.scenario.dto.request.HistoryReqDto;
import com.ddoya.chatgpt.scenario.dto.request.SituationProblemReqDto;
import com.ddoya.chatgpt.scenario.dto.response.*;
import com.ddoya.chatgpt.scenario.entity.Situation;
import com.ddoya.chatgpt.scenario.entity.SituationProblem;
import com.ddoya.chatgpt.scenario.entity.SituationProblemScript;
import com.ddoya.chatgpt.scenario.repository.SituationProblemRepository;
import com.ddoya.chatgpt.scenario.repository.SituationProblemScriptRepository;
import com.ddoya.chatgpt.scenario.repository.SituationRepository;
import com.ddoya.chatgpt.scenario.repository.SituationScriptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ScenarioServiceImpl implements ScenarioService {

    @Autowired
    SituationRepository situationRepository;
    @Autowired
    SituationScriptRepository situationScriptRepository;
    @Autowired
    SituationProblemRepository situationProblemRepository;
    @Autowired
    SituationProblemScriptRepository situationProblemScriptRepository;

    AuthServiceClient authServiceClient;

    @Override
    public EntireScenarioResultDto getEntireScenarioList() {
        List<Situation> scenarios = situationRepository.findAll();
        EntireScenarioResultDto entireScenarioResultDto = new EntireScenarioResultDto();
        entireScenarioResultDto.setScenarios(scenarios);
        entireScenarioResultDto.setSize(scenarios.size());
        return entireScenarioResultDto;
    }

    @Override
    public ScenarioScriptsResultDto getScenarioScripts(Integer scenarioId) {
        Situation situation = situationRepository.findById(scenarioId)
                .orElseThrow();

        List<ScenarioScriptDto> scripts = situationScriptRepository.findBySituationIdOrderByScriptNumber(
                scenarioId).stream().map(ScenarioScriptDto::new).collect(Collectors.toList());

        return ScenarioScriptsResultDto.builder().situation(situation).scripts(scripts)
                .build();
    }

    @Override
    public void addSituationProblemScore(Integer userId, SituationProblemReqDto situationProblemReqDto) {
        Situation situation = situationRepository.findById(situationProblemReqDto.getSituationId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid situationId: " + situationProblemReqDto.getSituationId()));
        SituationProblem situationProblem = new SituationProblem();
        situationProblem.updateSituationProblem(situationProblemReqDto, situation);
        situationProblemRepository.save(situationProblem);

        List<String> scripts = situationProblemReqDto.getScripts();
        List<Integer> scores = situationProblemReqDto.getScores();

        for (int i = 0; i < scripts.size(); i++) {
            SituationProblemScript situationProblemScript = new SituationProblemScript();
            situationProblemScript.updateSituationProblemScript(
                    scripts.get(i), scores.get(i), i + 1, situationProblem);
            System.out.println("i: " + scripts.get(i) + " | " + scores.get(i));
            situationProblemScriptRepository.save(situationProblemScript);
        }

        ResponseEntity<Object> response = authServiceClient.addProblemHistory(
                HistoryReqDto.builder().situationProblemReqDto(situationProblemReqDto).build());

    }

    @Override
    public SituationProblemResultDto getScenarioProblemResult(Integer situationProblemId) {
        SituationProblem situationProblem = situationProblemRepository.findBySituationProblemId(situationProblemId)
                .orElseThrow();

        Situation situation = situationRepository.findById(situationProblem.getSituation().getId())
                .orElseThrow();

        List<SituationProblemScriptDto> scripts = situationProblemScriptRepository.findBySituationProblemSituationProblemIdOrderByScriptNumber(
                situationProblemId).stream().map(SituationProblemScriptDto::new).collect(Collectors.toList());

        return SituationProblemResultDto.builder().situation(situation).situationProblem(situationProblem).scripts(scripts)
                .build();
    }
}
