package com.ddoya.auth.global.client;

import java.util.List;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "drama-service")
public interface DramaServiceClient {

    @GetMapping("/api/drama/clips")
    ResponseEntity<Object> getDramaClips(List<Integer> problemIds);
}
