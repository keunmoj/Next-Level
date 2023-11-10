package com.ddoya.chatgpt.scenario.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SituationProblemReqDto {

    private Integer situationId;

    private Integer totalScore;

    private List<Integer> scriptNumbers;

    private List<Integer> scores;
}
