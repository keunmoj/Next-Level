package com.ddoya.drama.drama.service;

import com.ddoya.drama.common.error.ErrorCode;
import com.ddoya.drama.common.error.exception.FeignException;
import com.ddoya.drama.common.error.exception.NotFoundException;
import com.ddoya.drama.common.response.ErrorResponse;
import com.ddoya.drama.drama.dto.request.DramaProblemReqDto;
import com.ddoya.drama.drama.dto.request.HistoryReqDto;
import com.ddoya.drama.drama.dto.response.ArtistResDto;
import com.ddoya.drama.drama.dto.response.ArtistsResDto;
import com.ddoya.drama.drama.dto.response.DramaClipResDto;
import com.ddoya.drama.drama.dto.response.DramaClipsResDto;
import com.ddoya.drama.drama.dto.response.DramaProblemResDto;
import com.ddoya.drama.drama.dto.response.DramaResDto;
import com.ddoya.drama.drama.dto.response.DramaScriptResDto;
import com.ddoya.drama.drama.dto.response.DramasResDto;
import com.ddoya.drama.drama.entity.Drama;
import com.ddoya.drama.drama.entity.DramaProblem;
import com.ddoya.drama.drama.entity.DramaScript;
import com.ddoya.drama.drama.repository.DramaProblemRepository;
import com.ddoya.drama.drama.repository.DramaRepository;
import com.ddoya.drama.drama.repository.DramaScriptRepository;
import com.ddoya.drama.global.client.AuthServiceClient;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class DramaService {

    private final DramaRepository dramaRepository;
    private final DramaProblemRepository dramaProblemRepository;
    private final DramaScriptRepository dramaScriptRepository;

    private final AuthServiceClient authServiceClient;

    public DramasResDto getAllDramasOrderByHit() {
        List<DramaResDto> dramas = dramaProblemRepository.findAllDramasBySumOfHit();

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
        List<DramaScriptResDto> dramaScripts = dramaScriptRepository.findAllByDramaProblem_IdOrderByScriptNumberAsc(
                dramaProblemId).stream().sorted(Comparator.comparing(DramaScript::getId))
            .map(DramaScriptResDto::new).collect(Collectors.toList());

        return DramaProblemResDto.builder().dramaProblem(dramaProblem).scripts(dramaScripts)
            .build();
    }

    public void addDramaProblemScore(Integer userId, DramaProblemReqDto dramaProblemReqDto) {
        DramaProblem dramaProblem = dramaProblemRepository.findById(
                dramaProblemReqDto.getDramaProblemId())
            .orElseThrow(() -> new NotFoundException(ErrorCode.DRAMA_PROBLEM_NOT_FOUND));
        dramaProblem.updateHit();

        ResponseEntity<Object> response = authServiceClient.addProblemHistory(
            HistoryReqDto.builder().userId(userId).dramaProblemReqDto(dramaProblemReqDto).build());
        if (response.getBody() instanceof ErrorResponse) {
            ErrorResponse errorResponse = (ErrorResponse) response.getBody();
            throw new FeignException(errorResponse.getStatus(), errorResponse.getMessage());
        }
    }

    public DramaClipsResDto getDramaClips(List<Integer> problemIds) {
        List<DramaClipResDto> dramaClips = dramaProblemRepository.findAllByIdIn(problemIds)
            .stream().map(DramaClipResDto::new).collect(Collectors.toList());

        return new DramaClipsResDto(dramaClips.size(), dramaClips);
    }

    public ArtistsResDto getLeastTwiceAppearArtist() {
        List<ArtistResDto> artists = dramaScriptRepository.findAllArtistAppearAtLeastTwoClips()
            .stream().map(ArtistResDto::new).collect(Collectors.toList());
        Collections.shuffle(artists);

        return ArtistsResDto.builder().artists(artists).build();
    }

    public DramaClipsResDto getRecentDramaProblemsClips(Long userId) {
        ResponseEntity<Object> response = authServiceClient.getRecentDramaProblemsId(userId);

        if (response.getBody() instanceof ErrorResponse) {
            ErrorResponse errorResponse = (ErrorResponse) response.getBody();
            throw new FeignException(errorResponse.getStatus(), errorResponse.getMessage());
        }

        Integer problemId = (Integer) response.getBody();
        Drama drama;
        if (Objects.isNull(problemId)) {
            List<Drama> dramas = dramaRepository.findAll();
            if (dramas.isEmpty()) {
                throw new NotFoundException(ErrorCode.DRAMA_NOT_FOUND);
            }
            Collections.shuffle(dramas);
            drama = dramas.get(0);
        } else {
            DramaProblem dramaProblem = dramaProblemRepository.findById(problemId)
                .orElseThrow(() -> new NotFoundException(ErrorCode.DRAMA_NOT_FOUND));
            drama = dramaProblem.getDrama();
        }

        List<DramaProblem> dramaProblems = dramaProblemRepository.findAllByDramaId(drama.getId());
        Collections.shuffle(dramaProblems);

        List<DramaClipResDto> dramaClips = dramaProblems.subList(0, 2).stream()
            .map(DramaClipResDto::new).collect(Collectors.toList());

        return new DramaClipsResDto(dramaClips.size(), drama.getTitle(), dramaClips);
    }
}
