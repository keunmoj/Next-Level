package com.ddoya.auth.history.entity;

import com.ddoya.auth.history.dto.request.HistoryReqDto;
import com.ddoya.auth.user.entity.User;
import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "HISTORY")
public class History {

    @Id
    @Column(name = "history_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Enumerated(value = EnumType.STRING)
    private ProblemType type;

    @Column(name = "problem_id")
    private Integer problemId;

    private LocalDate date;

    private Integer score;

    @Builder
    public History(User user, HistoryReqDto historyReqDto) {
        this.user = user;
        this.type = historyReqDto.getType();
        this.problemId = historyReqDto.getProblemId();
        this.date = historyReqDto.getDate();
        this.score = historyReqDto.getScore();
    }

    public void updateDate(LocalDate date) {
        this.date = date;
    }

    public void updateScore(Integer score) {
        this.score = score;
    }
}
