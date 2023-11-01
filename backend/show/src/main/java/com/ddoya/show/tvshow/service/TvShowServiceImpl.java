package com.ddoya.show.tvshow.service;

import com.ddoya.show.common.dto.ClipDto;
import com.ddoya.show.common.entity.ShowProblem;
import com.ddoya.show.common.entity.TvShow;
import com.ddoya.show.common.service.SingleClipService;
import com.ddoya.show.tvshow.dto.EntireShowResultDto;
import com.ddoya.show.tvshow.dto.ShowClipResultDto;
import com.ddoya.show.tvshow.dto.ShowProblemResultDto;
import com.ddoya.show.tvshow.dto.ShowResultDto;
import com.ddoya.show.tvshow.repository.EntireShowRepository;
import com.ddoya.show.tvshow.repository.ShowClipRepository;
import com.ddoya.show.tvshow.repository.ShowProblemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

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
        List<ShowResultDto> shows = entireShowRepository.findAllByHit().stream()
                .map(ShowResultDto::new)
                .collect(Collectors.toList());

        return new EntireShowResultDto(shows.size(), shows);
    }

    @Override
    public ShowClipResultDto getShowClip(int showId) {
        List<ShowProblem> clipList = showClipRepository.findByTvShow_Id(showId);
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
            ShowProblem showInfo = showProblemRepository.findById(showProblemId).orElseThrow();
            showProblemResultDto.setShowProblem(showInfo);
            showProblemResultDto.setResult(SUCCESS);
        } catch (Exception e) {
            e.printStackTrace();
            showProblemResultDto.setResult(FAIL);
        }
        System.out.println("결과 = " + showProblemResultDto);

        return showProblemResultDto;
    }

    public void playShowProblem(int showProblemId) {
        Optional<ShowProblem> showProblemOptional = showProblemRepository.findById(showProblemId);
        ShowProblem showProblem = showProblemOptional.orElseThrow(() -> new NoSuchElementException("Invalid showProblemId: " + showProblemId));
        showProblem.plusHit();
        showProblemRepository.save(showProblem);

        System.out.println("------------- 예능 문제 푼 사람 수 증가 --------------");
        System.out.println(showProblemId + "의 hit : " + showProblem.getHit());
    }
}
