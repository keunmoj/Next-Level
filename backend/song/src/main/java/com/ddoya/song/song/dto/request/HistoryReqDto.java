package com.ddoya.song.song.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;

@Getter
@AllArgsConstructor
public class HistoryReqDto {

    private Integer userId;
    private Integer problemId;
    private String type;
    private LocalDate date;
    private Integer score;

    @Builder
    public HistoryReqDto(Integer userId, SongProblemReqDto songProblemReqDto) {
        this.userId = userId;
        this.problemId = songProblemReqDto.getSongProblemId();
        this.type = "SONG";
        this.date = LocalDate.now();
        this.score = songProblemReqDto.getScore();
    }
}
