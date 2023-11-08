package com.ddoya.show.tvshow.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "show_problem")
public class ShowProblem {

    @Id
    @Column(name = "show_problem_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "problem_title")
    private String title;

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

    @Column(name = "explain")
    private String explain;

    @ManyToOne
    @JoinColumn(name = "tv_show_id")
    private TvShow tvShow;

    @ManyToOne
    @JoinColumn(name = "artist_id")
    private Artist artist;

    public void updateHit() {
        this.hit++;
    }
}
