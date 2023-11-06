package com.ddoya.auth.history.service;

import com.ddoya.auth.common.error.exception.FeignException;
import com.ddoya.auth.common.response.ErrorResponse;
import com.ddoya.auth.global.client.DramaServiceClient;
import com.ddoya.auth.global.client.ShowServiceClient;
import com.ddoya.auth.global.client.SongServiceClient;
import com.ddoya.auth.history.dto.request.HistoryReqDto;
import com.ddoya.auth.history.dto.response.HistoriesResDto;
import com.ddoya.auth.history.dto.response.HistoryDto;
import com.ddoya.auth.history.entity.History;
import com.ddoya.auth.history.entity.OrderType;
import com.ddoya.auth.history.entity.ProblemType;
import com.ddoya.auth.history.repository.HistoryRepository;
import com.ddoya.auth.history.vo.ClipResVo;
import com.ddoya.auth.history.vo.ClipsResVo;
import com.ddoya.auth.user.entity.User;
import com.ddoya.auth.user.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class HistoryService {

    private final HistoryRepository historyRepository;
    private final UserService userService;
    private final DramaServiceClient dramaServiceClient;
    private final ShowServiceClient showServiceClient;
    private final SongServiceClient songServiceClient;

    public HistoriesResDto getProblemHistories(String email, List<ProblemType> problemTypes,
        OrderType orderType) {
        User user = userService.getUserByEmail(email);

        if (problemTypes.contains(ProblemType.DRAMA) && problemTypes.contains(ProblemType.SHOW)) {
            List<History> dramaHistories = getHistories(user, ProblemType.DRAMA, orderType);
            List<Integer> dramaProblemIds = dramaHistories.stream()
                .map(history -> history.getProblemId())
                .distinct().collect(Collectors.toList());
            ClipsResVo dramaClipsResVo = getDramaClips(dramaProblemIds);
            List<HistoryDto> dramaHistoryDtos = dramaHistories.stream().map(history -> {
                ClipResVo clipResVo = dramaClipsResVo.getClips().stream()
                    .filter(clip -> clip.getId().equals(history.getProblemId()))
                    .findFirst().orElse(null);
                return HistoryDto.builder().history(history).clipResVo(clipResVo)
                    .build();
            }).collect(Collectors.toList());
            // ----------------------
            List<History> showHistories = getHistories(user, ProblemType.SHOW, orderType);
            List<Integer> showProblemIds = showHistories.stream()
                .map(history -> history.getProblemId())
                .distinct().collect(Collectors.toList());
            ClipsResVo showClipsResVo = getShowClips(showProblemIds);
            List<HistoryDto> showHistoryDtos = showHistories.stream().map(history -> {
                ClipResVo clipResVo = showClipsResVo.getClips().stream()
                    .filter(clip -> clip.getId().equals(history.getProblemId()))
                    .findFirst().orElse(null);
                return HistoryDto.builder().history(history).clipResVo(clipResVo)
                    .build();
            }).collect(Collectors.toList());

            List<HistoryDto> solveHistories = new ArrayList<>();
            solveHistories.addAll(dramaHistoryDtos);
            solveHistories.addAll(showHistoryDtos);
            solveHistories = solveHistories.stream()
                .sorted(Comparator.comparing(HistoryDto::getDate).reversed()).collect(
                    Collectors.toList());

            return new HistoriesResDto(solveHistories.size(), solveHistories);
        } else if (problemTypes.equals(Arrays.asList(ProblemType.SONG))) {
            List<History> songHistories = getHistories(user, ProblemType.SONG, orderType);
            List<Integer> songProblemIds = songHistories.stream()
                .map(history -> history.getProblemId())
                .distinct().collect(Collectors.toList());
            ClipsResVo songClipsResVo = getSongClips(songProblemIds);
            List<HistoryDto> songHistoryDtos = songHistories.stream().map(history -> {
                ClipResVo clipResVo = songClipsResVo.getClips().stream()
                    .filter(clip -> clip.getId().equals(history.getProblemId()))
                    .findFirst().orElse(null);
                return HistoryDto.builder().history(history).clipResVo(clipResVo)
                    .build();
            }).collect(Collectors.toList());

            return new HistoriesResDto(songHistoryDtos.size(), songHistoryDtos);
        }

        return null;
    }

    private List<History> getHistories(User user, ProblemType problemType, OrderType orderType) {
        if (orderType.equals(OrderType.HIGHEST)) {
            return historyRepository.findAllByUserAndTypeOrderByScoreDesc(user, problemType);
        } else if (orderType.equals(OrderType.LOWEST)) {
            return historyRepository.findAllByUserAndTypeOrderByScoreAsc(user, problemType);
        } else {
            return historyRepository.findAllByUserAndTypeOrderByDateDesc(user, problemType);
        }
    }

    private ClipsResVo getDramaClips(List<Integer> problemIds) {
        ResponseEntity<Object> response = dramaServiceClient.getDramaClips(problemIds);
        if (response.getBody() instanceof ErrorResponse) {
            ErrorResponse errorResponse = (ErrorResponse) response.getBody();
            throw new FeignException(errorResponse.getStatus(), errorResponse.getMessage());
        }

        ObjectMapper ob = new ObjectMapper();
        ClipsResVo dramaClipsResVo;

        dramaClipsResVo = ob.convertValue(response.getBody(), ClipsResVo.class);

        return dramaClipsResVo;
    }

    private ClipsResVo getShowClips(List<Integer> problemIds) {
        ResponseEntity<Object> response = showServiceClient.getShowClips(problemIds);
        if (response.getBody() instanceof ErrorResponse) {
            ErrorResponse errorResponse = (ErrorResponse) response.getBody();
            throw new FeignException(errorResponse.getStatus(), errorResponse.getMessage());
        }

        ObjectMapper ob = new ObjectMapper();
        ClipsResVo showClipsResVo;

        showClipsResVo = ob.convertValue(response.getBody(), ClipsResVo.class);

        return showClipsResVo;
    }

    private ClipsResVo getSongClips(List<Integer> problemIds) {
        ResponseEntity<Object> response = songServiceClient.getSongClips(problemIds);
        if (response.getBody() instanceof ErrorResponse) {
            ErrorResponse errorResponse = (ErrorResponse) response.getBody();
            throw new FeignException(errorResponse.getStatus(), errorResponse.getMessage());
        }

        ObjectMapper ob = new ObjectMapper();
        ClipsResVo songClipsResVo;

        songClipsResVo = ob.convertValue(response.getBody(), ClipsResVo.class);

        return songClipsResVo;
    }

    public void addProblemHistory(HistoryReqDto historyReqDto) {
        User user = userService.getUserById(historyReqDto.getUserId());
        History history = History.builder().user(user).historyReqDto(historyReqDto).build();

        historyRepository.save(history);
    }
}
