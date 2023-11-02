package com.ddoya.show.artist.dto;

import com.ddoya.show.common.entity.Artist;
import lombok.Data;

import java.util.List;

@Data
public class ArtistsResultDto {

    Integer size;
    List<ArtistDto> artists;
}
