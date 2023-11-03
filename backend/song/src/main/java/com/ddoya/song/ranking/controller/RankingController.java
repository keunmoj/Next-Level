package com.ddoya.song.ranking.controller;

import com.ddoya.song.common.dto.ApiResponse;
import com.ddoya.song.ranking.dto.RankingDto;
import com.ddoya.song.ranking.service.RankingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/ranking")
@RequiredArgsConstructor
public class RankingController {

    private final RankingService rankingService;
    @GetMapping("/all")
    public ResponseEntity<ApiResponse> getRanking(){
        System.out.println("------------------- 컨트롤러 ------------------");
        RankingDto.TopTenResDto topTenResDto = rankingService.getRankingOrderByScore();

        return ResponseEntity.ok(
                ApiResponse.builder().status(HttpStatus.OK.value()).message("랭킹 조회 완료").data(topTenResDto)
                        .build());
    }

}
