package com.ddoya.show.artist.service;

import com.ddoya.show.artist.dto.ArtistShowResultDto;
import com.ddoya.show.artist.dto.EntireArtistResultDto;

public interface ArtistService {
    EntireArtistResultDto getArtistList();

    ArtistShowResultDto getArtistShow(int artistId);
}
