package com.ddoya.chatgpt.scenario.service;

import com.ddoya.chatgpt.scenario.dto.EntireScenarioResultDto;
import com.ddoya.chatgpt.scenario.dto.ScenarioScriptDto;
import com.ddoya.chatgpt.scenario.dto.ScenarioScriptsResultDto;
import com.ddoya.chatgpt.scenario.entity.Situation;
import com.ddoya.chatgpt.scenario.entity.SituationScript;
import com.ddoya.chatgpt.scenario.repository.SituationRepository;
import com.ddoya.chatgpt.scenario.repository.SituationScriptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ScenarioServiceImpl implements ScenarioService {

    @Autowired
    SituationRepository situationRepository;
    @Autowired
    SituationScriptRepository situationScriptRepository;

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

        List<ScenarioScriptDto> scripts = situationScriptRepository.findBySituationId(
                scenarioId).stream().map(ScenarioScriptDto::new).collect(Collectors.toList());

        return ScenarioScriptsResultDto.builder().situation(situation).scripts(scripts)
                .build();
//
//        System.out.println("=========== situation =============");
//        System.out.println(situation);
//
//        List<ScenarioScriptDto> situationScripts = situationScriptRepository.findBySituationId(
//                scenarioId).stream().map(ScenarioScriptDto::new).collect(Collectors.toList());
//
//        return ScenarioScriptsResultDto.builder().situation(situation).scripts(situationScripts)
//                .build();

//        Situation situation = situationRepository.findById(scenarioId);


//        ScenarioScriptsResultDto scenarioScriptsResultDto = new ScenarioScriptsResultDto();
//        scenarioScriptsResultDto.setId(situation.getId());
//        scenarioScriptsResultDto.setTitle(situation.getTitle());
//        scenarioScriptsResultDto.setScripts(scripts);
//        scenarioScriptsResultDto.setSize(scripts.size());
//        return scenarioScriptsResultDto;
    }
}
