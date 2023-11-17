package com.ddoya.drama.drama.dto.response;

import com.ddoya.drama.drama.entity.Artist;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ArtistResDto {

    private Integer id;
    private String artistName;
    private String image;
    private String groupName;

    @Builder
    public ArtistResDto(Artist artist) {
        this.id = artist.getId();
        this.artistName = artist.getArtistName();
        this.image = artist.getImage();
        this.groupName = artist.getGroupName();
    }
}
