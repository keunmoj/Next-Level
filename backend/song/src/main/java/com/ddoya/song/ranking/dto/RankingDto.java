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
        private UserScoreResDto userScoreResDto;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class TopTenDto{
        private String name;
        private String nickname;
        private Integer score;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class UserScoreResDto{
        private String userName;
        private String nickname;
        private String gradeName;
        private Integer score;
    }
}
