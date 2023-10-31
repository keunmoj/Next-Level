package com.ddoya.show.common.service;

import com.ddoya.show.common.dto.ClipDto;
import com.ddoya.show.common.entity.ShowProblem;

public interface SingleClipService {
    ClipDto makeClipDto(ShowProblem clip);
}
