package com.ddoya.chatgpt.scenario.controller;

import com.ddoya.chatgpt.common.ApiResponse;
import com.ddoya.chatgpt.scenario.dto.EntireScenarioResultDto;
import com.ddoya.chatgpt.scenario.dto.ScenarioScriptsResultDto;
import com.ddoya.chatgpt.scenario.service.ScenarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chatgpt/scenario")
public class ScenarioController {

    @Autowired
    ScenarioService scenarioService;

    @GetMapping("/all")
    public ResponseEntity<ApiResponse> getScenarioList() {
        System.out.println("-------------------- entire scenario service ------------------");
        System.out.println("-------------------- 상황 전체 조회 ------------------");
        EntireScenarioResultDto entireScenarioResultDto = scenarioService.getEntireScenarioList();
        return ResponseEntity.ok(
                ApiResponse.builder().status(HttpStatus.OK.value()).message("전체 상황 조회 완료").data(entireScenarioResultDto)
                        .build());
    }

    @GetMapping("/problem/{scenarioId}")
    public ResponseEntity<ApiResponse> getScenarioScripts(@PathVariable Integer scenarioId) {
        System.out.println("------------------ scenarios script service ------------------");
        System.out.println("-------------------- 상황의 대사 조회 ------------------");
        ScenarioScriptsResultDto scenarioScriptsResultDto = scenarioService.getScenarioScripts(scenarioId);
        return ResponseEntity.ok(
                ApiResponse.builder().status(HttpStatus.OK.value()).message("상황의 대사 조회 완료").data(scenarioScriptsResultDto)
                        .build());
    }
}
