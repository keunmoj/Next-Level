package com.ddoya.song.song.dto;

import com.ddoya.song.common.Entity.SongProblem;
import com.ddoya.song.common.dto.SongDto;
import lombok.Data;

import java.util.List;

@Data
public class EntireSongResultDto {

    int result;     // 반환 결과

    int songCnt;    // 노래 개수

    List<SongDto> entireSongList;

}
