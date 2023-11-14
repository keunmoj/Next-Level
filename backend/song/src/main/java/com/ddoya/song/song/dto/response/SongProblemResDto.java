package com.ddoya.song.song.dto.response;

import com.ddoya.song.common.entity.SongProblem;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class SongProblemResDto {

    private Integer id;
    private String title;
    private String artist;
    private Integer hit;
    private String image;

    @Builder
    public SongProblemResDto(SongProblem songProblem) {
        this.id = songProblem.getSongProblemId();
        this.title = songProblem.getSongTitle();
        this.artist = songProblem.getArtist().getArtistName();
        this.hit = songProblem.getHit();
        this.image = songProblem.getAlbumImg();
    }

}
