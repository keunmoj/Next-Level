package com.ddoya.song.common.service;

import com.ddoya.song.common.Entity.SongProblem;
import com.ddoya.song.common.dto.SongDto;

public interface SingleSongService {
    SongDto makeSongDto(SongProblem song);
}
