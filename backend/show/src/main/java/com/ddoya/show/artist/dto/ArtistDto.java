package com.ddoya.show.artist.dto;

import com.ddoya.show.common.entity.Artist;
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
