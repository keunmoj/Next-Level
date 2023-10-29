package com.ddoya.song.common.dto;

import lombok.Data;

@Data
public class SongDto {

    private int songId;

    private String songTitle;

    private String albumImg;

    private String coverImg;

    private String artistName;
}
