package com.ddoya.show.tvshow.service;

import com.ddoya.show.common.dto.ShowClipDto;
import com.ddoya.show.common.entity.ShowProblem;
import com.ddoya.show.global.client.AuthServiceClient;
import com.ddoya.show.tvshow.dto.request.HistoryReqDto;
import com.ddoya.show.tvshow.dto.request.ShowProblemReqDto;
import com.ddoya.show.tvshow.dto.response.EntireShowResultDto;
import com.ddoya.show.common.dto.ShowClipsResultDto;
import com.ddoya.show.tvshow.dto.response.ShowProblemResultDto;
import com.ddoya.show.tvshow.dto.response.ShowResultDto;
import com.ddoya.show.tvshow.repository.EntireShowRepository;
import com.ddoya.show.tvshow.repository.ShowClipRepository;
import com.ddoya.show.tvshow.repository.ShowProblemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Objects;
import java.util.Optional;
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

    public void playShowProblem(Integer userId, ShowProblemReqDto showProblemReqDto) {
        ResponseEntity<Object> response = authServiceClient.addProblemHistory(
                HistoryReqDto.builder().userId(userId).showProblemReqDto(showProblemReqDto).build());
    }
}
