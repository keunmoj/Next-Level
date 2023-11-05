package com.ddoya.song.song.dto.response;

import com.ddoya.song.common.dto.SongDto;
import lombok.Data;

import java.util.List;

@Data
public class ArtistSongResultDto {

    int result;

    int songCnt;

    List<SongDto> songList;
}
