package com.ddoya.drama.drama.dto.response;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ArtistsResDto {

    private Integer size;
    private List<ArtistResDto> artists;

    @Builder
    public ArtistsResDto(List<ArtistResDto> artists) {
        this.size = artists.size();
        this.artists = artists;
    }
}
