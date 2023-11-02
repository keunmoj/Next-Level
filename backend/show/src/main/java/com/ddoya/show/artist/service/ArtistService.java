package com.ddoya.show.artist.service;

import com.ddoya.show.artist.dto.ArtistsResultDto;
import com.ddoya.show.common.dto.ShowClipsResultDto;

public interface ArtistService {
    ArtistsResultDto getArtistList();

    ShowClipsResultDto getArtistsClips(Integer artistId);
}
