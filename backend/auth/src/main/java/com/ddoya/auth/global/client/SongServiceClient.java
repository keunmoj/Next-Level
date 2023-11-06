package com.ddoya.auth.global.client;

import java.util.List;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient("song-service")
public interface SongServiceClient {

    @GetMapping("/api/song/clips")
    ResponseEntity<Object> getSongProblems(@RequestParam List<Integer> problemIds);
}
