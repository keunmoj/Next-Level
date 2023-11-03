package com.ddoya.show.tvshow.service;

import com.ddoya.show.tvshow.dto.request.ShowProblemReqDto;
import com.ddoya.show.tvshow.dto.response.EntireShowResultDto;
import com.ddoya.show.common.dto.ShowClipsResultDto;
import com.ddoya.show.tvshow.dto.response.ShowProblemResultDto;

public interface TvShowService {
    EntireShowResultDto getEntireShowList();

    ShowClipsResultDto getShowClips(Integer showId);

    ShowProblemResultDto getClipInfo(Integer showProblemId);

    void playShowProblem(Integer userId, ShowProblemReqDto showProblemReqDto);
}
