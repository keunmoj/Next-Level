package com.ddoya.show.tvshow.service;

import com.ddoya.show.common.entity.TvShow;
import com.ddoya.show.tvshow.dto.EntireShowResultDto;
import com.ddoya.show.tvshow.repository.EntireShowRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TvShowServiceImpl implements TvShowService {

    @Autowired
    EntireShowRepository entireShowRepository;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @Override
    public EntireShowResultDto getEntireShowList() {
        List<TvShow> entireShowList = entireShowRepository.findAll();
        EntireShowResultDto entireShowResultDto = new EntireShowResultDto();
        entireShowResultDto.setEntireShowList(entireShowList);
        entireShowResultDto.setShowCnt(entireShowList.size());
        entireShowResultDto.setResult(SUCCESS);
        return entireShowResultDto;
    }
}
