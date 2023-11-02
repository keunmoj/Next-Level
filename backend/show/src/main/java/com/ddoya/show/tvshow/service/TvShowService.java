package com.ddoya.show.tvshow.service;

import com.ddoya.show.tvshow.dto.EntireShowResultDto;
import com.ddoya.show.common.dto.ShowClipsResultDto;
import com.ddoya.show.tvshow.dto.ShowProblemResultDto;

public interface TvShowService {
    EntireShowResultDto getEntireShowList();

    ShowClipsResultDto getShowClips(Integer showId);

    ShowProblemResultDto getClipInfo(Integer showProblemId);

    void playShowProblem(int showProblemId);
}
