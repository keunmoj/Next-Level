package com.ddoya.show.artist.service;

import com.ddoya.show.artist.dto.ArtistDto;
import com.ddoya.show.artist.dto.ArtistShowResultDto;
import com.ddoya.show.artist.dto.ArtistsResultDto;
import com.ddoya.show.artist.repository.ArtistShowRepository;
import com.ddoya.show.artist.repository.EntireArtistRepository;
import com.ddoya.show.common.dto.ShowClipDto;
import com.ddoya.show.common.entity.Artist;
import com.ddoya.show.common.entity.ShowProblem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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
//        List<Artist> artistList = entireArtistRepository.findShowArtists();
//        ArtistsResultDto artistsResultDto = new ArtistsResultDto();
//        ArrayList<ArtistDto> artistDtoList = new ArrayList<>();
//
//        for (Artist artist : artistList) {
//            ArtistDto artistDto = makeArtistDto(artist);
//            artistDtoList.add(artistDto);
//        }
//
//        artistsResultDto.setResult(FAIL);
//        if (artistDtoList.size() != 0) {
//            artistsResultDto.setArtistList(artistDtoList);
//            artistsResultDto.setArtistCnt(artistDtoList.size());
//            artistsResultDto.setResult(SUCCESS);
//        }

        List<ArtistDto> artistList = entireArtistRepository.findShowArtists();
        ArtistsResultDto artistsResultDto = new ArtistsResultDto();
        artistsResultDto.setArtistList(artistList);
        artistsResultDto.setArtistCnt(artistList.size());
        artistsResultDto.setResult(SUCCESS);
        return artistsResultDto;
    }

    @Override
    public ArtistShowResultDto getArtistShow(int artistId) {
        System.out.println("================ artist clip 찾기 ========================");

        List<ShowProblem> clipList = artistShowRepository.findByArtist_Id(artistId);
        ArtistShowResultDto artistShowResultDto = new ArtistShowResultDto();
        ArrayList<ShowClipDto> clipDtoList = new ArrayList<>();

//        for (ShowProblem clip : clipList) {
//            ShowClipDto showClipDto = singleClipService.makeClipDto(clip);
//            clipDtoList.add(showClipDto);
//        }
//
//        artistShowResultDto.setResult(FAIL);
//        if (clipDtoList.size() != 0) {
//            artistShowResultDto.setClipList(clipDtoList);
//            artistShowResultDto.setClipCnt(clipDtoList.size());
//            artistShowResultDto.setResult(SUCCESS);
//        }
        return artistShowResultDto;

    }

//    @Override
//    public ArtistDto makeArtistDto(Artist artist) {
//        ArtistDto artistDto = new ArtistDto(artist);
//        artistDto.setId(artist.getId());
//        artistDto.setName(artist.getArtistName());
//
//        return artistDto;
//    }
}
