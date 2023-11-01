package com.ddoya.show.artist.service;

import com.ddoya.show.artist.dto.ArtistDto;
import com.ddoya.show.artist.dto.ArtistShowResultDto;
import com.ddoya.show.artist.dto.ArtistsResultDto;
import com.ddoya.show.common.entity.Artist;

public interface ArtistService {
    ArtistsResultDto getArtistList();

    ArtistShowResultDto getArtistShow(int artistId);

//    ArtistDto makeArtistDto(Artist artist);
}
