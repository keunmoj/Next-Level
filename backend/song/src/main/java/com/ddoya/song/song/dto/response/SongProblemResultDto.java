package com.ddoya.song.song.dto.response;

import com.ddoya.song.common.entity.SongProblem;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class SongProblemResultDto {

    int result;

    SongProblem songProblem;
}
