package com.ddoya.show.artist.service;

import com.ddoya.show.artist.dto.ArtistDto;
import com.ddoya.show.artist.dto.ArtistsResultDto;
import com.ddoya.show.artist.repository.ArtistShowRepository;
import com.ddoya.show.artist.repository.EntireArtistRepository;
import com.ddoya.show.common.dto.ShowClipDto;
import com.ddoya.show.common.dto.ShowClipsResultDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ArtistServiceImpl implements ArtistService {

    @Autowired
    EntireArtistRepository entireArtistRepository;
    @Autowired
    ArtistShowRepository artistShowRepository;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @Override
    public ArtistsResultDto getArtistList() {
        List<ArtistDto> artists = entireArtistRepository.findShowArtists();
        ArtistsResultDto artistsResultDto = new ArtistsResultDto();
        artistsResultDto.setArtists(artists);
        artistsResultDto.setSize(artists.size());
        return artistsResultDto;
    }

    @Override
    public ShowClipsResultDto getArtistsClips(Integer artistId) {
        System.out.println("================ artist clip 찾기 ========================");

        List<ShowClipDto> showClips = artistShowRepository.findByArtist_Id(artistId)
                .stream().map(ShowClipDto::new).collect(Collectors.toList());

        return new ShowClipsResultDto(showClips.size(), showClips);

    }
}
