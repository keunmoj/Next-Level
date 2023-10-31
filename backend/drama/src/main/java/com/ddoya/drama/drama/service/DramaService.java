package com.ddoya.drama.drama.service;

import com.ddoya.drama.drama.dto.response.DramaClipResDto;
import com.ddoya.drama.drama.dto.response.DramaClipsResDto;
import com.ddoya.drama.drama.dto.response.DramaResDto;
import com.ddoya.drama.drama.dto.response.DramaScriptResDto;
import com.ddoya.drama.drama.dto.response.DramaScriptsResDto;
import com.ddoya.drama.drama.dto.response.DramasResDto;
import com.ddoya.drama.drama.repository.DramaProblemRepository;
import com.ddoya.drama.drama.repository.DramaRepository;
import com.ddoya.drama.drama.repository.DramaScriptRepository;
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

    public DramasResDto getAllDramas() {
        List<DramaResDto> dramas = dramaRepository.findAll().stream()
            .map(DramaResDto::new)
            .collect(Collectors.toList());

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

//    public DramaScriptsResDto getDramaProblem(Integer dramaProblemId) {
//        List<DramaScriptResDto> dramaScripts = dramaScriptRepository.findAllByDramaProblem_Id(
//            dramaProblemId).stream().map(DramaScriptResDto::new).collect(Collectors.toList());
//
//        DramaScriptsResDto dramaScriptsResDto =
//
//    }
}
