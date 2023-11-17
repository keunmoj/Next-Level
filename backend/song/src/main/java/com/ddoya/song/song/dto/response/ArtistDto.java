package com.ddoya.song.song.dto.response;

import com.ddoya.song.common.entity.Artist;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ArtistDto {

    private Integer artistId;
    private String artistName;
    private String image;
    private String groupName;

    @Builder
    public ArtistDto(Artist artist) {
        this.artistId = artist.getArtistId();
        this.artistName = artist.getArtistName();
        this.image = artist.getImage();
        this.groupName = artist.getGroupName();
    }
}
