package com.ddoya.show.artist.service;

import com.ddoya.show.artist.dto.ArtistShowResultDto;
import com.ddoya.show.artist.dto.EntireArtistResultDto;
import com.ddoya.show.artist.repository.ArtistShowRepository;
import com.ddoya.show.artist.repository.EntireArtistRepository;
import com.ddoya.show.common.dto.ClipDto;
import com.ddoya.show.common.entity.Artist;
import com.ddoya.show.common.entity.ShowProblem;
import com.ddoya.show.common.service.SingleClipService;
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
    @Autowired
    SingleClipService singleClipService;

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

    @Override
    public ArtistShowResultDto getArtistShow(int artistId) {
        System.out.println("================ artist clip 찾기 ========================");

        List<ShowProblem> clipList = artistShowRepository.findByArtist_ArtistId(artistId);
        ArtistShowResultDto artistShowResultDto = new ArtistShowResultDto();
        ArrayList<ClipDto> clipDtoList = new ArrayList<>();

        for (ShowProblem clip : clipList) {
            ClipDto clipDto = singleClipService.makeClipDto(clip);
            clipDtoList.add(clipDto);
        }

        artistShowResultDto.setResult(FAIL);
        if (clipDtoList.size() != 0) {
            artistShowResultDto.setClipList(clipDtoList);
            artistShowResultDto.setClipCnt(clipDtoList.size());
            artistShowResultDto.setResult(SUCCESS);
        }
        return artistShowResultDto;

    }
}
