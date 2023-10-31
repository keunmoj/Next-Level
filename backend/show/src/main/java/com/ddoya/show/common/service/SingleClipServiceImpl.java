package com.ddoya.show.common.service;

import com.ddoya.show.common.dto.ClipDto;
import com.ddoya.show.common.entity.ShowProblem;
import org.springframework.stereotype.Service;

@Service
public class SingleClipServiceImpl implements SingleClipService {

    // 클립이름, 대사, 이미지 등 필요한 정보만 담기
    @Override
    public ClipDto makeClipDto(ShowProblem clip) {
        ClipDto clipDto = new ClipDto();
        clipDto.setShowProblemId(clip.getShowProblemId());
        clipDto.setProblemTitle(clip.getProblemTitle());
        clipDto.setImage(clipDto.getImage());
        clipDto.setScript(clipDto.getScript());

        return clipDto;
    }

}
