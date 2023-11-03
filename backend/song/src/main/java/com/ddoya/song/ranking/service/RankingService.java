package com.ddoya.song.ranking.service;

import com.ddoya.song.ranking.dto.RankingDto;
import com.ddoya.song.ranking.repository.RankingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class RankingService {
    private final RankingRepository rankingRepository;

    public RankingDto.TopTenResDto getRankingOrderByScore(){
        System.out.println("------------------- 서비스 ------------------");
        List<RankingDto.TopTenDto> topTenDtos = rankingRepository.findTopTenByScore();

        return RankingDto.TopTenResDto.builder().response(topTenDtos).build();
    }

}
