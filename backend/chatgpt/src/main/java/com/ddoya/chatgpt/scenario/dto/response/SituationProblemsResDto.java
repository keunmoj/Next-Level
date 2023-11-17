package com.ddoya.chatgpt.scenario.dto.response;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class SituationProblemsResDto {

    private Integer size;
    private List<SituationProblemResDto> problems;
}
