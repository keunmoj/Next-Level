package com.ddoya.song.song.dto.response;

import com.ddoya.song.common.dto.SongDto;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class EntireSongResultDto {

    int result;     // 반환 결과

    int songCnt;    // 노래 개수

    List<SongDto> entireSongList;

}
