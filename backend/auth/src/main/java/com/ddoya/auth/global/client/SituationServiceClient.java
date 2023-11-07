package com.ddoya.auth.global.client;

import java.util.List;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient("chatgpt-service")
public interface SituationServiceClient {

    @GetMapping("/api/chatgpt/scenario/clips")
    ResponseEntity<Object> getSituationProblems(@RequestParam List<Integer> problemIds);
}
