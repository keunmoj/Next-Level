package com.ddoya.show.common.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "show_problem")
public class ShowProblem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int showProblemId;

    @Column(name = "problem_title")
    private String problemTitle;

    @Column(name = "hit")
    private int hit;

    @Column(name = "clip_start_time")
    private String clipStartTime;

    @Column(name = "clip_end_time")
    private String clipEndTime;

    @Column(name = "image")
    private String image;

    @Column(name = "script")
    private String script;

    @Column(name = "notation")
    private String notation;

    @Column(name = "start_time")
    private String startTime;

    @Column(name = "video_id")
    private String videoId;

    @ManyToOne
    @JoinColumn(name = "tv_show_id")
    private TvShow tvShow;

    @ManyToOne
    @JoinColumn(name = "artist_id")
    private Artist artist;

    public void plusHit() {
        this.hit++;
    }
}
