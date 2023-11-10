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
                String grade = getGrade(u.getScore());
                response.add(RankingDto.TopTenDto.builder().name(u.getName()).nickname(u.getNickname()).score(u.getScore()).profileImageUrl(u.getProfileImageUrl()).grade(grade).build());
            }
        }else{
            for(int i=0; i<10; i++){
                User u = users.get(i);
                String grade = getGrade(u.getScore());
                response.add(RankingDto.TopTenDto.builder().name(u.getName()).nickname(u.getNickname()).score(u.getScore()).profileImageUrl(u.getProfileImageUrl()).grade(grade).build());
            }
        }

        // 본인 점수, 등급 조회
        Grade userGrade = userGradeRepository.findGradeNameByScore(userId).get(0);
        User userInfo = userRepository.findUserById(userId);

        RankingDto.UserScoreResDto userScoreResDto = RankingDto.UserScoreResDto.builder().userName(userInfo.getName()).nickname(userInfo.getNickname())
                .gradeName(userGrade.getGradeName()).score(userInfo.getScore()).profileImageUrl(userInfo.getProfileImageUrl()).build();

        return RankingDto.TopTenResDto.builder().response(response).userScoreResDto(userScoreResDto).build();
    }

    public String getGrade(int score){
        if(score >= 10000){
            return "챌린저";
        }else if(score >= 5000) {
            return "다이아";
        }else if(score >= 3000){
            return "플래티넘";
        }else if(score >= 1000){
            return "골드";
        }else if(score >= 300){
            return "실버";
        }else{
            return "브론즈";
        }
    }
}
