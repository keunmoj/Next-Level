package com.ddoya.evaluate.evaluate.controller;

import com.ddoya.evaluate.common.response.ApiResponse;
import com.ddoya.evaluate.evaluate.dto.EvaluateDto;
import com.ddoya.evaluate.evaluate.service.EvaluateService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/evaluate")
@RequiredArgsConstructor
public class EvaluateController {
    private final EvaluateService evaluateService;
    @PostMapping("/result")
    public ResponseEntity<ApiResponse> startEvaluate(@RequestParam("wavFile") MultipartFile wavFile, @RequestParam("script") String script){
        EvaluateDto.Response response = evaluateService.startEvalutate(wavFile, script);

        return ResponseEntity.ok(ApiResponse.builder().status(HttpStatus.OK.value()).message("발음 평가 완료").data(response).build());
    }
}
