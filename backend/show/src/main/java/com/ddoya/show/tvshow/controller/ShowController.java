package com.ddoya.show.tvshow.controller;

import com.ddoya.show.tvshow.dto.response.*;
import com.ddoya.show.common.response.ApiResponse;
import com.ddoya.show.tvshow.dto.request.ShowProblemReqDto;
import com.ddoya.show.tvshow.service.TvShowService;
import java.util.List;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

@RestController
@RequestMapping("/api/show")
@RequiredArgsConstructor
public class ShowController {

    @Autowired
    TvShowService tvShowService;

    @GetMapping("/all")
    public ResponseEntity<ApiResponse> getShowList() {
        EntireShowResultDto entireShowResultDto = tvShowService.getEntireShowList();
        return ResponseEntity.ok(
                ApiResponse.builder().status(HttpStatus.OK.value()).message("전체 예능 조회 완료").data(entireShowResultDto)
                        .build());
    }

    @GetMapping("/clip/{showId}")
    public ResponseEntity<ApiResponse> getShowClipList(@PathVariable Integer showId) {
        ShowClipsResultDto showClipsResultDto = tvShowService.getShowClips(showId);
        return ResponseEntity.ok(
                ApiResponse.builder().status(HttpStatus.OK.value()).message("클립 조회 완료").data(showClipsResultDto)
                        .build());
    }

    @GetMapping("/problem/{showProblemId}")
    public ResponseEntity<ApiResponse> getShowProblem(@PathVariable Integer showProblemId) {
        ShowProblemResultDto showProblemResultDto = tvShowService.getClipInfo(showProblemId);

        return ResponseEntity.ok(
                ApiResponse.builder().status(HttpStatus.OK.value()).message("문제 조회 완료")
                        .data(showProblemResultDto).build());
    }

    @PostMapping("/problem/result")
    public ResponseEntity<ApiResponse> finishShowProblem(HttpServletRequest httpServletRequest, @Valid @RequestBody ShowProblemReqDto showProblemReqDto) {
        tvShowService.addShowProblemScore(
                Integer.parseInt(httpServletRequest.getHeader("X-Authorization-Id")),
                showProblemReqDto);

        return ResponseEntity.ok(
                ApiResponse.builder().status(HttpStatus.OK.value()).message("문제 풀이 결과 등록 완료")
                        .data(null).build());
    }


    @GetMapping("/artist/all")
    public ResponseEntity<ApiResponse> getArtistList() {
        ArtistsResultDto artists = tvShowService.getArtistList();

        return ResponseEntity.ok(
                ApiResponse.builder().status(HttpStatus.OK.value()).message("아티스트 조회 완료").data(artists)
                        .build());
    }

    @GetMapping("/artist/clip/{artistId}")
    public ResponseEntity<ApiResponse> getArtistClips(@PathVariable Integer artistId) {
        ShowClipsResultDto showClips = tvShowService.getArtistsClips(artistId);

        return ResponseEntity.ok(
                ApiResponse.builder().status(HttpStatus.OK.value()).message("클립 조회 완료").data(showClips)
                        .build());
    }

    @GetMapping("/clips")
    ResponseEntity<Object> getShowClips(@RequestParam List<Integer> problemIds) {
        ShowClipsResultDto showClipsResDto = tvShowService.getShowClips(problemIds);

        return ResponseEntity.ok(showClipsResDto);
    }

    @GetMapping("/recent")
    ResponseEntity<ApiResponse> getRecentShowProblemsClips(HttpServletRequest request) {
        RecentShowClipsResDto showClipsResultDto = tvShowService.getRecentShowProblemsClips(
                Long.valueOf(request.getHeader("X-Authorization-Id")));

        return ResponseEntity.ok(
                ApiResponse.builder().status(HttpStatus.OK.value()).message("최근 학습한 예능의 클립 2개 조회 완료")
                        .data(showClipsResultDto).build());
    }
}
