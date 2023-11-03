package com.ddoya.song.ranking.dto;

import lombok.*;

import java.util.List;

public class RankingDto {
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class TopTenResDto{
        private List<TopTenDto> response;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @Builder
    public static class TopTenDto{
        private String name;
        private String nickname;
        private Integer score;

        // 생성자 추가
        public TopTenDto(String name, String nickname, Integer score) {
            this.name = name;
            this.nickname = nickname;
            this.score = score;
        }
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class UserScoreResDto{
        private String name;
        private String nickname;
        private Integer score;
        private String grade;
    }
}
