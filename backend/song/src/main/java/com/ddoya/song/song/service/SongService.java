package com.ddoya.song.song.service;

import com.ddoya.song.song.dto.request.SongProblemReqDto;
import com.ddoya.song.song.dto.response.ArtistSongResultDto;
import com.ddoya.song.song.dto.response.EntireArtistResultDto;
import com.ddoya.song.song.dto.response.EntireSongResultDto;
import com.ddoya.song.song.dto.response.SongProblemResultDto;
import com.ddoya.song.song.dto.response.SongProblemsResDto;
import java.util.List;

public interface SongService {
    EntireSongResultDto getEntireSongList();

    SongProblemResultDto getSongInfo(int songProblemId);

    void addSongProblemScore(Integer userId, SongProblemReqDto songProblemReqDto);

    EntireArtistResultDto getArtistList();

    ArtistSongResultDto getArtistSong(Integer artistId);

    SongProblemsResDto getSongClips(List<Integer> problemIds);
}
