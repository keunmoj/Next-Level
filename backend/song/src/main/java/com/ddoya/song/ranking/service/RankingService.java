package com.ddoya.song.ranking.service;

import com.ddoya.song.common.entity.User;
import com.ddoya.song.ranking.dto.RankingDto;
import com.ddoya.song.ranking.entity.Grade;
import com.ddoya.song.ranking.repository.RankingRepository;
import com.ddoya.song.ranking.repository.UserGradeRepository;
import com.ddoya.song.ranking.repository.UserRepository;
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
    private final UserGradeRepository userGradeRepository;
    private final UserRepository userRepository;
    public RankingDto.TopTenResDto getRankingOrderByScore(Integer userId){
        List<User> users = rankingRepository.findTopTenByScore();
        List<RankingDto.TopTenDto> response = new ArrayList<>();

        // top10 랭킹 조회
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

        // 본인 점수, 등급 조회
        Grade userGrade = userGradeRepository.findGradeNameByScore(userId).get(0);
        User userInfo = userRepository.findUserById(userId);

        RankingDto.UserScoreResDto userScoreResDto = RankingDto.UserScoreResDto.builder().userName(userInfo.getName()).nickname(userInfo.getNickname())
                .gradeName(userGrade.getGradeName()).score(userInfo.getScore()).profileImageUrl(userInfo.getProfileImageUrl()).build();

        return RankingDto.TopTenResDto.builder().response(response).userScoreResDto(userScoreResDto).build();
    }

}
