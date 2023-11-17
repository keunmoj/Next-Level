package com.ddoya.song.song.dto.response;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class SongProblemsResDto {

    private Integer size;
    private List<SongProblemResDto> problems;

}
