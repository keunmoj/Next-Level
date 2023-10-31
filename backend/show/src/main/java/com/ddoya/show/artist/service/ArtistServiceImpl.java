package com.ddoya.show.artist.service;

import com.ddoya.show.artist.dto.EntireArtistResultDto;
import com.ddoya.show.artist.repository.EntireArtistRepository;
import com.ddoya.show.common.entity.Artist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtistServiceImpl implements ArtistService {

    @Autowired
    EntireArtistRepository entireArtistRepository;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @Override
    public EntireArtistResultDto getArtistList() {
        List<Artist> artistList = entireArtistRepository.findAll();

        int fromIdx = 11;
        int toIdx = 22;
        List<Artist> showArtistList = artistList.subList(fromIdx, toIdx);

        EntireArtistResultDto entireArtistResultDto = new EntireArtistResultDto();
        entireArtistResultDto.setArtistList(showArtistList);
        entireArtistResultDto.setArtistCnt(showArtistList.size());
        entireArtistResultDto.setResult(SUCCESS);
        return entireArtistResultDto;
    }
}
