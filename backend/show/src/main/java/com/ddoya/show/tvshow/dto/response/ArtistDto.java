package com.ddoya.show.tvshow.dto.response;

import com.ddoya.show.tvshow.entity.Artist;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ArtistDto {

    private Integer id;
    private String name;

    @Builder
    public ArtistDto(Artist artist) {
        this.id = artist.getId();
        this.name = artist.getArtistName();
    }
}
