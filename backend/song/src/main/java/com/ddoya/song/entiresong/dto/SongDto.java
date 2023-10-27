package com.ddoya.song.entiresong.dto;

import lombok.Data;

@Data
public class SongDto {

    private int songId;

    private String songTitle;

    private String albumImg;

    private String coverImg;

    private String artistName;
}
