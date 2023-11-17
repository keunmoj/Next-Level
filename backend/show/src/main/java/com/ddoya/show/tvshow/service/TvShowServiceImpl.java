package com.ddoya.show.tvshow.service;

import com.ddoya.show.common.error.ErrorCode;
import com.ddoya.show.common.error.exception.FeignException;
import com.ddoya.show.common.error.exception.NotFoundException;
import com.ddoya.show.common.response.ErrorResponse;
import com.ddoya.show.tvshow.dto.response.*;
import com.ddoya.show.tvshow.entity.ShowProblem;
import com.ddoya.show.global.client.AuthServiceClient;
import com.ddoya.show.tvshow.dto.request.HistoryReqDto;
import com.ddoya.show.tvshow.dto.request.ShowProblemReqDto;
import com.ddoya.show.tvshow.entity.TvShow;
import com.ddoya.show.tvshow.repository.ArtistShowRepository;
import com.ddoya.show.tvshow.repository.EntireArtistRepository;
import com.ddoya.show.tvshow.repository.EntireShowRepository;
import com.ddoya.show.tvshow.repository.ShowClipRepository;
import com.ddoya.show.tvshow.repository.ShowProblemRepository;

import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    private final AuthServiceClient authServiceClient;

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
        TvShow show = entireShowRepository.findById(showId);

        return new ShowClipsResultDto(showClips.size(), showClips);

    }

    @Override
    public ShowProblemResultDto getClipInfo(Integer showProblemId) {
        ShowProblem showProblem = showProblemRepository.findById(showProblemId)
                .orElseThrow(() -> new NotFoundException(ErrorCode.SHOW_PROBLEM_NOT_FOUND));

        return new ShowProblemResultDto(showProblem);
    }

    @Override
    public void addShowProblemScore(Integer userId, ShowProblemReqDto showProblemReqDto) {

        showProblemRepository.incrementHit(showProblemReqDto.getShowProblemId());

        ResponseEntity<Object> response = authServiceClient.addProblemHistory(
                HistoryReqDto.builder().userId(userId).showProblemReqDto(showProblemReqDto).build());
        if (response.getBody() instanceof ErrorResponse) {
            ErrorResponse errorResponse = (ErrorResponse) response.getBody();
            throw new FeignException(errorResponse.getStatus(), errorResponse.getMessage());
        }
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

    @Override
    public ShowClipsResultDto getShowClips(List<Integer> problemIds) {
        List<ShowClipDto> showClips = showClipRepository.findAllByIdIn(problemIds).stream()
            .map(ShowClipDto::new).collect(Collectors.toList());

        return new ShowClipsResultDto(showClips.size(), showClips);
    }

    @Override
    public RecentShowClipsResDto getRecentShowProblemsClips(Long userId) {
        ResponseEntity<Object> response = authServiceClient.getRecentShowProblemsId(userId);

        if (response.getBody() instanceof ErrorResponse) {
            ErrorResponse errorResponse = (ErrorResponse) response.getBody();
            throw new FeignException(errorResponse.getStatus(), errorResponse.getMessage());
        }

        Integer problemId = (Integer) response.getBody();
        Integer showId;
        String showTitle;

        if (Objects.isNull(problemId)) {
            List<TvShow> shows = entireShowRepository.findAllByHit();
            Collections.shuffle(shows);
            showId = shows.get(0).getId();
            showTitle = shows.get(0).getTitle();
        } else {
            ShowProblem showProblem = showProblemRepository.findById(problemId)
                    .orElseThrow();
            showId = showProblem.getTvShow().getId();
            showTitle = showProblem.getTvShow().getTitle();
        }

        List<ShowProblem> showProblems = showProblemRepository.findAllByTvShowId(showId);
        Collections.shuffle(showProblems);

        List<ShowClipDto> showClips = showProblems.subList(0, 5).stream()
                .map(ShowClipDto::new).collect(Collectors.toList());

        return new RecentShowClipsResDto(showClips.size(), showTitle, showClips);
    }

}
