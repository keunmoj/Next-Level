package com.ddoya.show.tvshow.dto.response;

import com.ddoya.show.tvshow.dto.response.ArtistDto;
import lombok.Data;

import java.util.List;

@Data
public class ArtistsResultDto {

    Integer size;
    List<ArtistDto> artists;
}
