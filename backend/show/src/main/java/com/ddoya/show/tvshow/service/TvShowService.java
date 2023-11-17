package com.ddoya.show.tvshow.service;

import com.ddoya.show.tvshow.dto.response.*;
import com.ddoya.show.tvshow.dto.request.ShowProblemReqDto;

import java.util.List;
import org.springframework.web.bind.annotation.RequestParam;

public interface TvShowService {
    EntireShowResultDto getEntireShowList();

    ShowClipsResultDto getShowClips(Integer showId);

    ShowProblemResultDto getClipInfo(Integer showProblemId);

    void addShowProblemScore(Integer userId, ShowProblemReqDto showProblemReqDto);

    ArtistsResultDto getArtistList();

    ShowClipsResultDto getArtistsClips(Integer artistId);

    ShowClipsResultDto getShowClips(@RequestParam List<Integer> problemIds);

    RecentShowClipsResDto getRecentShowProblemsClips(Long userId);

}
