package com.ddoya.song.entiresong.dto;

import com.ddoya.song.common.Entity.SongProblem;
import lombok.Data;

import java.util.List;

@Data
public class EntireSongResultDto {

    int result;     // 반환 결과

    int songCnt;    // 노래 개수

    List<SongProblem> songList;

}
