package com.ddoya.show.tvshow.service;

import com.ddoya.show.tvshow.dto.response.ArtistsResultDto;
import com.ddoya.show.tvshow.dto.request.ShowProblemReqDto;
import com.ddoya.show.tvshow.dto.response.EntireShowResultDto;
import com.ddoya.show.tvshow.dto.response.ShowClipsResultDto;
import com.ddoya.show.tvshow.dto.response.ShowProblemResultDto;

public interface TvShowService {
    EntireShowResultDto getEntireShowList();

    ShowClipsResultDto getShowClips(Integer showId);

    ShowProblemResultDto getClipInfo(Integer showProblemId);

    void addShowProblemScore(Integer userId, ShowProblemReqDto showProblemReqDto);

    ArtistsResultDto getArtistList();

    ShowClipsResultDto getArtistsClips(Integer artistId);
}
