package com.ddoya.drama.drama.dto.request;

import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class HistoryReqDto {

    private Integer userId;
    private Integer problemId;
    private String type;
    private LocalDate date;
    private Integer score;

    @Builder
    public HistoryReqDto(Integer userId, DramaProblemReqDto dramaProblemReqDto) {
        this.userId = userId;
        this.problemId = dramaProblemReqDto.getDramaProblemId();
        this.type = "DRAMA";
        this.date = LocalDate.now();
        this.score = 20;
    }
}
