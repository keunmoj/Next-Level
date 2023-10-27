package com.ddoya.song.entireartist.service;

import com.ddoya.song.common.Entity.Artist;
import com.ddoya.song.entireartist.dto.EntireArtistResultDto;
import com.ddoya.song.entireartist.repository.EntireArtistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EntireArtistServiceImpl implements EntireArtistService{

    @Autowired
    EntireArtistRepository entireArtistRepository;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @Override
    public EntireArtistResultDto getArtistList() {
        System.out.println("-------------------- entire artist service ------------------");
        System.out.println("-------------------- 가수 전체 조회 ------------------");
        List<Artist> artistList = entireArtistRepository.findAll();
        System.out.println(artistList);

        EntireArtistResultDto entireArtistResultDto = new EntireArtistResultDto();
        entireArtistResultDto.setArtistList(artistList);
        entireArtistResultDto.setArtistCnt(artistList.size());
        entireArtistResultDto.setResult(SUCCESS);
        return entireArtistResultDto;
    }

}
