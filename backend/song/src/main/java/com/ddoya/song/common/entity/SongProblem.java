package com.ddoya.song.common.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "song_problem")
public class SongProblem {

    @Id
    @Column(name = "song_problem_id")
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

    public void updateHit() {
        this.hit++;
    }
}
