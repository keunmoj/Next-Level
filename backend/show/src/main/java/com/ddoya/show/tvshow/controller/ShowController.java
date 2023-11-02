package com.ddoya.show.tvshow.controller;

import com.ddoya.show.common.response.ApiResponse;
import com.ddoya.show.tvshow.dto.EntireShowResultDto;
import com.ddoya.show.common.dto.ShowClipsResultDto;
import com.ddoya.show.tvshow.dto.ShowProblemResultDto;
import com.ddoya.show.tvshow.service.TvShowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    public ResponseEntity<ApiResponse> getShowList() {
        System.out.println("-------------------- entire show service ------------------");
        System.out.println("-------------------- 예능 전체 조회 ------------------");
        EntireShowResultDto entireShowResultDto = tvShowService.getEntireShowList();
        return ResponseEntity.ok(
                ApiResponse.builder().status(HttpStatus.OK.value()).message("전체 예능 조회 완료").data(entireShowResultDto)
                        .build());
    }

    @GetMapping("/clip/{showId}")
    public ResponseEntity<ApiResponse> getShowClipList(@PathVariable Integer showId) {
        System.out.println("-------------------- show clip service ------------------");
        System.out.println("-------------------- 선택한 예능의 클립 조회 ------------------");
        ShowClipsResultDto showClipsResultDto = tvShowService.getShowClips(showId);
        return ResponseEntity.ok(
                ApiResponse.builder().status(HttpStatus.OK.value()).message("클립 조회 완료").data(showClipsResultDto)
                        .build());
    }

    @GetMapping("/problem/{showProblemId}")
    public ResponseEntity<ApiResponse> getShowProblem(@PathVariable Integer showProblemId) {
        System.out.println("-------------------- show clip service ------------------");
        System.out.println("-------------------- 선택한 클립의 정보 조회 ------------------");
        ShowProblemResultDto showProblemResultDto = tvShowService.getClipInfo(showProblemId);

        return ResponseEntity.ok(
                ApiResponse.builder().status(HttpStatus.OK.value()).message("문제 조회 완료")
                        .data(showProblemResultDto).build());
    }

    @PostMapping("/finish/{show_problem_id}")
    public void finishShowProblem(@PathVariable(name = "show_problem_id") int showProblemId) {
        System.out.println("-------------------- finish show service ------------------");
        System.out.println("-------------------- 선택한 예능 학습 완료 ------------------");
        tvShowService.playShowProblem(showProblemId);
    }

}
