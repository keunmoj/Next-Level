package com.ddoya.song.artist.service;

import com.ddoya.song.artist.dto.ArtistSongResultDto;
import com.ddoya.song.artist.dto.EntireArtistResultDto;

public interface ArtistService {

    EntireArtistResultDto getArtistList();

    ArtistSongResultDto getArtistSong(int artistId);

}
