package com.ddoya.show.artist.dto;

import com.ddoya.show.common.entity.Artist;
import lombok.Data;

import java.util.List;

@Data
public class EntireArtistResultDto {

    int result;

    int artistCnt;

    List<Artist> artistList;
}
