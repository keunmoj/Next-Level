package com.ddoya.show.tvshow.controller;

import com.ddoya.show.tvshow.dto.response.ArtistsResultDto;
import com.ddoya.show.common.response.ApiResponse;
import com.ddoya.show.tvshow.dto.request.ShowProblemReqDto;
import com.ddoya.show.tvshow.dto.response.EntireShowResultDto;
import com.ddoya.show.tvshow.dto.response.ShowClipsResultDto;
import com.ddoya.show.tvshow.dto.response.ShowProblemResultDto;
import com.ddoya.show.tvshow.service.TvShowService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

@RestController
@RequestMapping("/api/show")
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

    @PostMapping("/problem/result")
    public ResponseEntity<ApiResponse> finishShowProblem(HttpServletRequest httpServletRequest, @Valid @RequestBody ShowProblemReqDto showProblemReqDto) {
        tvShowService.addShowProblemScore(
                Integer.parseInt(httpServletRequest.getHeader("X-Authorization-Id")),
                showProblemReqDto);

        return ResponseEntity.ok(
                ApiResponse.builder().status(HttpStatus.OK.value()).message("문제 풀이 결과 등록 완료")
                        .data(null).build());
    }

    // artist
    @GetMapping("/artist/all")
    public ResponseEntity<ApiResponse> getArtistList() {
        System.out.println("-------------------- show artist service ------------------");
        System.out.println("-------------------- 두번 이상 나온 연예인 조회 ------------------");
        ArtistsResultDto artists = tvShowService.getArtistList();

        return ResponseEntity.ok(
                ApiResponse.builder().status(HttpStatus.OK.value()).message("아티스트 조회 완료").data(artists)
                        .build());
    }

    @GetMapping("/artist/clip/{artistId}")
    public ResponseEntity<ApiResponse> getArtistClips(@PathVariable Integer artistId) {
        System.out.println("-------------------- artist service ------------------");
        System.out.println("-------------------- 연예인의 출연 클립 조회 ------------------");
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

}
