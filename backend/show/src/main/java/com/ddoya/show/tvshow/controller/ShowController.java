package com.ddoya.show.tvshow.controller;

import com.ddoya.show.tvshow.dto.EntireShowResultDto;
import com.ddoya.show.tvshow.dto.ShowClipResultDto;
import com.ddoya.show.tvshow.dto.ShowProblemResultDto;
import com.ddoya.show.tvshow.service.TvShowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Objects;

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

    @GetMapping("/clip/{show_id}")
    public ResponseEntity<ShowClipResultDto> getShowClipList(@PathVariable(name = "show_id") int showId) {
        System.out.println("-------------------- show service ------------------");
        System.out.println("-------------------- 선택한 예능의 클립 조회 ------------------");
        ShowClipResultDto showClipResultDto = tvShowService.getShowClip(showId);
        return ResponseEntity.ok().body(showClipResultDto);
    }

    @GetMapping("/problem/{show_problem_id}")
    public ResponseEntity<ShowProblemResultDto> getShowProblem(@PathVariable(name = "show_problem_id") int showProblemId) {
        System.out.println("-------------------- show clip service ------------------");
        System.out.println("-------------------- 선택한 클립의 정보 조회 ------------------");
        ShowProblemResultDto showProblemResultDto = tvShowService.getClipInfo(showProblemId);
        System.out.println("결과 = " + showProblemResultDto);
        return ResponseEntity.ok().body(showProblemResultDto);
    }

    @PostMapping("/finish/{show_problem_id}")
    public void finishShowProblem(@PathVariable(name = "show_problem_id") int showProblemId) {
        System.out.println("-------------------- finish show service ------------------");
        System.out.println("-------------------- 선택한 예능 학습 완료 ------------------");
        tvShowService.playShowProblem(showProblemId);
    }

}
