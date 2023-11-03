package com.ddoya.song.ranking.service;

import com.ddoya.song.common.entity.User;
import com.ddoya.song.ranking.dto.RankingDto;
import com.ddoya.song.ranking.repository.RankingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class RankingService {
    private final RankingRepository rankingRepository;

    public RankingDto.TopTenResDto getRankingOrderByScore(){
        List<User> users = rankingRepository.findTopTenByScore();
        List<RankingDto.TopTenDto> response = new ArrayList<>();

        if(users.size() <= 10){
            for(User u : users){
                response.add(RankingDto.TopTenDto.builder().name(u.getName()).nickname(u.getNickname()).score(u.getScore()).build());
            }
        }else{
            for(int i=0; i<10; i++){
                User u = users.get(i);
                response.add(RankingDto.TopTenDto.builder().name(u.getName()).nickname(u.getNickname()).score(u.getScore()).build());
            }
        }
        return RankingDto.TopTenResDto.builder().response(response).build();
    }

}
