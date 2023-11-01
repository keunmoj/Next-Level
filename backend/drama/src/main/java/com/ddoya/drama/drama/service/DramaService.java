package com.ddoya.drama.drama.service;

import com.ddoya.drama.common.error.ErrorCode;
import com.ddoya.drama.common.error.exception.NotFoundException;
import com.ddoya.drama.drama.dto.response.DramaClipResDto;
import com.ddoya.drama.drama.dto.response.DramaClipsResDto;
import com.ddoya.drama.drama.dto.response.DramaProblemResDto;
import com.ddoya.drama.drama.dto.response.DramaResDto;
import com.ddoya.drama.drama.dto.response.DramaScriptResDto;
import com.ddoya.drama.drama.dto.response.DramasResDto;
import com.ddoya.drama.drama.entity.DramaProblem;
import com.ddoya.drama.drama.repository.DramaProblemRepository;
import com.ddoya.drama.drama.repository.DramaRepository;
import com.ddoya.drama.drama.repository.DramaScriptRepository;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class DramaService {

    private final DramaRepository dramaRepository;
    private final DramaProblemRepository dramaProblemRepository;
    private final DramaScriptRepository dramaScriptRepository;

    public DramasResDto getAllDramasOrderByHit() {
        List<DramaResDto> dramas = dramaRepository.findAllByHit().stream()
            .sorted(Comparator.comparing(DramaResDto::getSumOfHit)).collect(
                Collectors.toList());

        return new DramasResDto(dramas.size(), dramas);
    }

    public DramaClipsResDto getAllDramaClips(Integer dramaId) {
        List<DramaClipResDto> dramaClips = dramaProblemRepository.findAllByDramaId(dramaId)
            .stream().map(DramaClipResDto::new).collect(Collectors.toList());

        return new DramaClipsResDto(dramaClips.size(), dramaClips);
    }

    public DramaClipsResDto getArtistsClips(Integer artistId) {
        List<DramaClipResDto> dramaClips = dramaProblemRepository.findAllByArtistId(artistId)
            .stream().map(DramaClipResDto::new).collect(Collectors.toList());

        return new DramaClipsResDto(dramaClips.size(), dramaClips);
    }

    public DramaProblemResDto getDramaProblem(Integer dramaProblemId) {
        DramaProblem dramaProblem = dramaProblemRepository.findById(dramaProblemId)
            .orElseThrow(() -> new NotFoundException(ErrorCode.DRAMA_PROBLEM_NOT_FOUND));
        List<DramaScriptResDto> dramaScripts = dramaScriptRepository.findAllByDramaProblem_Id(
            dramaProblemId).stream().map(DramaScriptResDto::new).collect(Collectors.toList());

        return DramaProblemResDto.builder().dramaProblem(dramaProblem).scripts(dramaScripts)
            .build();
    }
}
