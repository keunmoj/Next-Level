package com.ddoya.show.tvshow.service;

import com.ddoya.show.common.dto.ShowClipDto;
import com.ddoya.show.common.entity.ShowProblem;
import com.ddoya.show.tvshow.dto.EntireShowResultDto;
import com.ddoya.show.tvshow.dto.ShowClipsResultDto;
import com.ddoya.show.tvshow.dto.ShowProblemResultDto;
import com.ddoya.show.tvshow.dto.ShowResultDto;
import com.ddoya.show.tvshow.repository.EntireShowRepository;
import com.ddoya.show.tvshow.repository.ShowClipRepository;
import com.ddoya.show.tvshow.repository.ShowProblemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TvShowServiceImpl implements TvShowService {

    @Autowired
    EntireShowRepository entireShowRepository;
    @Autowired
    ShowClipRepository showClipRepository;
    @Autowired
    ShowProblemRepository showProblemRepository;

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

    public void playShowProblem(int showProblemId) {
        Optional<ShowProblem> showProblemOptional = showProblemRepository.findById(showProblemId);
        ShowProblem showProblem = showProblemOptional.orElseThrow(() -> new NoSuchElementException("Invalid showProblemId: " + showProblemId));
        showProblem.plusHit();
        showProblemRepository.save(showProblem);

        System.out.println("------------- 예능 문제 푼 사람 수 증가 --------------");
        System.out.println(showProblemId + "의 hit : " + showProblem.getHit());
    }
}
