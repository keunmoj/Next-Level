package com.ddoya.show.tvshow.controller;

import com.ddoya.show.tvshow.dto.EntireShowResultDto;
import com.ddoya.show.tvshow.service.TvShowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/show")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true", allowedHeaders = "*", methods = {
        RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS,
        RequestMethod.HEAD })
public class ShowController {

    @Autowired
    TvShowService tvShowService;

    @GetMapping("/all")
    public ResponseEntity<EntireShowResultDto> getShowList() {
        System.out.println("-------------------- entire show service ------------------");
        System.out.println("-------------------- 예능 전체 조회 ------------------");
        EntireShowResultDto entireShowResultDto = tvShowService.getEntireShowList();
        System.out.println("결과 = " + entireShowResultDto);
        return ResponseEntity.ok().body(entireShowResultDto);
    }

}
