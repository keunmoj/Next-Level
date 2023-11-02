package com.ddoya.chatgpt.scenario.service;

import com.ddoya.chatgpt.scenario.dto.EntireScenarioResultDto;
import com.ddoya.chatgpt.scenario.entity.Situation;
import com.ddoya.chatgpt.scenario.repository.EntireScenarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScenarioServiceImpl implements ScenarioService {

    @Autowired
    EntireScenarioRepository entireScenarioRepository;

    @Override
    public EntireScenarioResultDto getEntireScenarioList() {
        List<Situation> scenarios = entireScenarioRepository.findAll();
        EntireScenarioResultDto entireScenarioResultDto = new EntireScenarioResultDto();
        entireScenarioResultDto.setScenarios(scenarios);
        entireScenarioResultDto.setSize(scenarios.size());
        return entireScenarioResultDto;
    }
}
