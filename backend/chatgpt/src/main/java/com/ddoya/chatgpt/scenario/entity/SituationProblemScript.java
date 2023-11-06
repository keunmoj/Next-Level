package com.ddoya.chatgpt.scenario.entity;

import com.ddoya.chatgpt.scenario.dto.request.SituationProblemReqDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "situation_problem_script")
public class SituationProblemScript {

    @Id
    @Column(name = "situation_problem_script_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer SituationProblemScriptId;

    @Column(name = "script")
    private String script;

    @Column(name = "score")
    private Integer score;

    @Column(name = "script_number")
    private Integer scriptNumber;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "situation_problem_id")
    private SituationProblem situationProblem;

    public void updateSituationProblemScript(String script, Integer score, Integer scriptNumber, SituationProblem situationProblem) {
        this.script = script;
        this.score = score;
        this.scriptNumber = scriptNumber;
        this.situationProblem = situationProblem;
    }

}
