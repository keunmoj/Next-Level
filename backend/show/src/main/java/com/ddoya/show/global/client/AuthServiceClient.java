package com.ddoya.show.global.client;

import com.ddoya.show.tvshow.dto.request.HistoryReqDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "auth-service")
public interface AuthServiceClient {

    @PostMapping("api/auth/history/add")
    ResponseEntity<Object> addProblemHistory(@RequestBody HistoryReqDto historyReqDto);
}
