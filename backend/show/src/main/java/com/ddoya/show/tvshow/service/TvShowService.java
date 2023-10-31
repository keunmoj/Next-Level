package com.ddoya.show.tvshow.service;

import com.ddoya.show.tvshow.dto.EntireShowResultDto;
import com.ddoya.show.tvshow.dto.ShowClipResultDto;
import com.ddoya.show.tvshow.dto.ShowProblemResultDto;

public interface TvShowService {
    EntireShowResultDto getEntireShowList();

    ShowClipResultDto getShowClip(int showId);

    ShowProblemResultDto getClipInfo(int showProblemId);
}
