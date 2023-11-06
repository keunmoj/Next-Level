package com.ddoya.song.ranking.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "grade")
public class Grade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer gradeId;

    @Column(name = "grade_name")
    private String gradeName;

    @Column(name = "score")
    private Integer score;

    public Grade(Integer gradeId, String gradeName, Integer score) {
        this.gradeId = gradeId;
        this.gradeName = gradeName;
        this.score = score;
    }

    public Grade() {

    }
}
