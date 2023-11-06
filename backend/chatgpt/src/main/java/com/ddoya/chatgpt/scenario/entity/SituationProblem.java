package com.ddoya.chatgpt.scenario.entity;

import com.ddoya.chatgpt.scenario.dto.request.SituationProblemReqDto;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "situation_problem")
public class SituationProblem {

    @Id
    @Column(name = "situation_problem_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int situationProblemId;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "score")
    private Integer score;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "situation_id")
    private Situation situation;

    public void updateSituationProblem(SituationProblemReqDto situationProblemReqDto, Situation situation) {
        this.date = LocalDate.now();
        this.score = situationProblemReqDto.getTotalScore();
        this.situation = situation;
    }
}
