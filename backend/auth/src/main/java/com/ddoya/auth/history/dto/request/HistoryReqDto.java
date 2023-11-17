package com.ddoya.auth.history.dto.request;

import com.ddoya.auth.history.entity.ProblemType;
import java.time.LocalDate;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class HistoryReqDto {

    @NotNull
    private Long userId;

    @NotNull
    private Integer problemId;

    @NotNull
    private ProblemType type;

    @NotNull
    private LocalDate date;

    @Min(0)
    @Max(100)
    private Integer score;

}
