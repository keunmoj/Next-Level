package com.ddoya.drama.drama.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "drama_problem")
public class DramaProblem {

    @Id
    @Column(name = "DRAMA_PROBLEM_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "drama_id")
    private Drama drama;

    @Column(name = "problem_title", length = 45)
    private String problemTitle;

    @Column(name = "hit")
    private Integer hit;

    @Column(name = "start_time", length = 45)
    private String startTime;

    @Column(name = "end_time", length = 45)
    private String endTime;

    @Column(name = "image", length = 512)
    private String image;

    @Column(name = "video_id", length = 45)
    private String videoId;

    public void updateHit() {
        this.hit += 1;
    }
}
