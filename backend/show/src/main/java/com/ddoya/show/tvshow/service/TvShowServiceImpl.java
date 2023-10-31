package com.ddoya.show.tvshow.service;

import com.ddoya.show.common.dto.ClipDto;
import com.ddoya.show.common.entity.ShowProblem;
import com.ddoya.show.common.entity.TvShow;
import com.ddoya.show.common.service.SingleClipService;
import com.ddoya.show.tvshow.dto.EntireShowResultDto;
import com.ddoya.show.tvshow.dto.ShowClipResultDto;
import com.ddoya.show.tvshow.dto.ShowProblemResultDto;
import com.ddoya.show.tvshow.repository.EntireShowRepository;
import com.ddoya.show.tvshow.repository.ShowClipRepository;
import com.ddoya.show.tvshow.repository.ShowProblemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TvShowServiceImpl implements TvShowService {

    @Autowired
    EntireShowRepository entireShowRepository;
    @Autowired
    ShowClipRepository showClipRepository;
    @Autowired
    ShowProblemRepository showProblemRepository;
    @Autowired
    SingleClipService singleClipService;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @Override
    public EntireShowResultDto getEntireShowList() {
        List<TvShow> entireShowList = entireShowRepository.findAllByHit();
        EntireShowResultDto entireShowResultDto = new EntireShowResultDto();

        entireShowResultDto.setEntireShowList(entireShowList);
        entireShowResultDto.setShowCnt(entireShowList.size());
        entireShowResultDto.setResult(SUCCESS);
        return entireShowResultDto;
    }

    @Override
    public ShowClipResultDto getShowClip(int showId) {
        List<ShowProblem> clipList = showClipRepository.findByTvShow_TvShowId(showId);
        ShowClipResultDto showClipResultDto = new ShowClipResultDto();
        ArrayList<ClipDto> clipDtoList = new ArrayList<>();

        for (ShowProblem clip : clipList) {
            ClipDto clipDto = singleClipService.makeClipDto(clip);
            clipDtoList.add(clipDto);
        }

        showClipResultDto.setResult(FAIL);
        if (clipDtoList.size() != 0) {
            showClipResultDto.setEntireClipList(clipDtoList);
            showClipResultDto.setClipCnt(clipDtoList.size());
            showClipResultDto.setResult(SUCCESS);
        }
        return showClipResultDto;
    }

    @Override
    public ShowProblemResultDto getClipInfo(int showProblemId) {
        ShowProblemResultDto showProblemResultDto = new ShowProblemResultDto();

        try {
            ShowProblem showInfo = showProblemRepository.findByShowProblemId(showProblemId).orElseThrow();
            showProblemResultDto.setShowProblem(showInfo);
            showProblemResultDto.setResult(SUCCESS);
        } catch (Exception e) {
            e.printStackTrace();
            showProblemResultDto.setResult(FAIL);
        }
        System.out.println("결과 = " + showProblemResultDto);

        return showProblemResultDto;
    }
}
