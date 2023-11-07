package com.ddoya.song.song.dto.response;

import com.ddoya.song.common.entity.Artist;
import lombok.Data;

import java.util.List;

@Data
public class EntireArtistResultDto {

    int result;

    int artistCnt;

    List<ArtistDto> artistList;
}
