package com.ddoya.song.common.Entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "song_problem")
public class SongProblem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int songProblemId;

    @Column(name = "song_title")
    private String songTitle;

    @Column(name = "album_img")
    private String albumImg;

    @Column(name = "cover_img")
    private String coverImg;

    @Column(name = "hit")
    private int hit;

    @Column(name = "script")
    private String script;

    @Column(name = "initial")
    private String initial;

    @Column(name = "song_start_time")
    private String songStartTime;

    @Column(name = "song_end_time")
    private String songEndTime;

    @Column(name = "video_id")
    private String videoId;

    @ManyToOne
    @JoinColumn(name = "artist_id")
    private Artist artist;

    public void plusHit() {
        this.hit++;
    }
}
