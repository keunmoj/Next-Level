package com.ddoya.show.tvshow.service;

import com.ddoya.show.common.dto.ClipDto;
import com.ddoya.show.common.entity.ShowProblem;
import com.ddoya.show.common.entity.TvShow;
import com.ddoya.show.common.service.SingleClipService;
import com.ddoya.show.tvshow.dto.EntireShowResultDto;
import com.ddoya.show.tvshow.dto.ShowClipResultDto;
import com.ddoya.show.tvshow.repository.EntireShowRepository;
import com.ddoya.show.tvshow.repository.ShowClipRepository;
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

        System.out.println("=================================");
        System.out.println("=============== clip list ==================");
        System.out.println(clipList);


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
}
