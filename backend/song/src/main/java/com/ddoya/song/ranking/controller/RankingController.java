package com.ddoya.song.ranking.controller;

import com.ddoya.song.common.dto.ApiResponse;
import com.ddoya.song.ranking.dto.RankingDto;
import com.ddoya.song.ranking.service.RankingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/ranking")
@RequiredArgsConstructor
public class RankingController {

    private final RankingService rankingService;
    @GetMapping("/all/{userId}")
    public ResponseEntity<ApiResponse> getRanking(@PathVariable Integer userId){
        RankingDto.TopTenResDto topTenResDto = rankingService.getRankingOrderByScore(userId);
        return ResponseEntity.ok(
                ApiResponse.builder().status(HttpStatus.OK.value()).message("랭킹 조회 완료").data(topTenResDto)
                        .build());
    }
}
