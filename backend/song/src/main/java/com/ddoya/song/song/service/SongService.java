package com.ddoya.song.song.service;

import com.ddoya.song.song.dto.EntireSongResultDto;
import com.ddoya.song.song.dto.SongProblemResultDto;

import java.util.Map;

public interface SongService {
    EntireSongResultDto getEntireSongList();

    SongProblemResultDto getSongInfo(int songProblemId);

    void playSongProblem(int songProblemId);

}
