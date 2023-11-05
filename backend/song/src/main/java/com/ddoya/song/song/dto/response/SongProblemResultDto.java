package com.ddoya.song.song.dto.response;

import com.ddoya.song.common.entity.SongProblem;
import lombok.Data;

import java.util.List;

@Data
public class SongProblemResultDto {

    int result;

    SongProblem songProblem;
}
