package com.ddoya.auth.history.controller;

import com.ddoya.auth.common.response.ApiResponse;
import com.ddoya.auth.history.dto.request.HistoryReqDto;
import com.ddoya.auth.history.service.HistoryService;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth/history")
@RequiredArgsConstructor
public class HistoryController {

    private final HistoryService historyService;

    @PostMapping("/add")
    public ResponseEntity<ApiResponse> addProblemHistory(
        @Valid @RequestBody HistoryReqDto historyReqDto) {
        historyService.addProblemHistory(historyReqDto);

        return ResponseEntity.ok(
            ApiResponse.builder().status(HttpStatus.CREATED.value()).message("결과 등록 완료").data(null)
                .build());
    }
}
