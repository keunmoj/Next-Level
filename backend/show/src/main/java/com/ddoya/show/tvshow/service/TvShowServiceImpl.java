package com.ddoya.show.tvshow.service;

import com.ddoya.show.tvshow.dto.response.ShowClipDto;
import com.ddoya.show.common.entity.ShowProblem;
import com.ddoya.show.global.client.AuthServiceClient;
import com.ddoya.show.tvshow.dto.request.HistoryReqDto;
import com.ddoya.show.tvshow.dto.request.ShowProblemReqDto;
import com.ddoya.show.tvshow.dto.response.*;
import com.ddoya.show.tvshow.dto.response.ShowClipsResultDto;
import com.ddoya.show.tvshow.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class TvShowServiceImpl implements TvShowService {

    @Autowired
    EntireShowRepository entireShowRepository;
    @Autowired
    ShowClipRepository showClipRepository;
    @Autowired
    ShowProblemRepository showProblemRepository;
    @Autowired
    EntireArtistRepository entireArtistRepository;
    @Autowired
    ArtistShowRepository artistShowRepository;

    AuthServiceClient authServiceClient;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @Override
    public EntireShowResultDto getEntireShowList() {
        List<ShowResultDto> shows = entireShowRepository.findAllByHit().stream()
                .map(ShowResultDto::new)
                .collect(Collectors.toList());

        return new EntireShowResultDto(shows.size(), shows);
    }

    @Override
    public ShowClipsResultDto getShowClips(Integer showId) {
        List<ShowClipDto> showClips = showClipRepository.findByTvShowId(showId)
                .stream().map(ShowClipDto::new).collect(Collectors.toList());

        return new ShowClipsResultDto(showClips.size(), showClips);

    }

    @Override
    public ShowProblemResultDto getClipInfo(Integer showProblemId) {
        ShowProblem showProblem = showProblemRepository.findById(showProblemId)
                .orElseThrow();

        return new ShowProblemResultDto(showProblem);
    }

    public void addShowProblemScore(Integer userId, ShowProblemReqDto showProblemReqDto) {
        ShowProblem showProblem = showProblemRepository.findById(
                        showProblemReqDto.getShowProblemId())
                .orElseThrow();
        showProblem.updateHit();

        ResponseEntity<Object> response = authServiceClient.addProblemHistory(
                HistoryReqDto.builder().userId(userId).showProblemReqDto(showProblemReqDto).build());
    }

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
        List<ShowClipDto> showClips = artistShowRepository.findByArtist_Id(artistId)
                .stream().map(ShowClipDto::new).collect(Collectors.toList());

        return new ShowClipsResultDto(showClips.size(), showClips);

    }
}
