package com.ddoya.auth.history.vo;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ProblemsResVo {

    private Integer size;
    private List<ProblemResVo> problems;

}
