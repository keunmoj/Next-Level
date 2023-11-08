package com.ddoya.drama.global.client;

import com.ddoya.drama.drama.dto.request.HistoryReqDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "auth-service")
public interface AuthServiceClient {

    @PostMapping("/api/auth/history/add")
    ResponseEntity<Object> addProblemHistory(@RequestBody HistoryReqDto historyReqDto);

    @GetMapping("/recent-drama-problem")
    ResponseEntity<Object> getRecentDramaProblemsId(@RequestParam Long userId);
}
