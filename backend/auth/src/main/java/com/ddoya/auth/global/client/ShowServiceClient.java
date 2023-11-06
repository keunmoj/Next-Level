package com.ddoya.auth.global.client;

import java.util.List;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient("show-service")
public interface ShowServiceClient {

    @GetMapping("/api/show/clips")
    ResponseEntity<Object> getShowProblems(@RequestParam List<Integer> problemIds);
}
