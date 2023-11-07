package com.ddoya.auth.history.service;

import com.ddoya.auth.common.error.exception.FeignException;
import com.ddoya.auth.common.response.ErrorResponse;
import com.ddoya.auth.global.client.DramaServiceClient;
import com.ddoya.auth.global.client.ShowServiceClient;
import com.ddoya.auth.global.client.SituationServiceClient;
import com.ddoya.auth.global.client.SongServiceClient;
import com.ddoya.auth.history.dto.request.HistoryReqDto;
import com.ddoya.auth.history.dto.response.HistoriesResDto;
import com.ddoya.auth.history.dto.response.HistoryDto;
import com.ddoya.auth.history.entity.History;
import com.ddoya.auth.history.entity.OrderType;
import com.ddoya.auth.history.entity.ProblemType;
import com.ddoya.auth.history.repository.HistoryRepository;
import com.ddoya.auth.history.vo.ProblemResVo;
import com.ddoya.auth.history.vo.ProblemsResVo;
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
    private final SituationServiceClient situationServiceClient;

    public HistoriesResDto getProblemHistories(String email, List<ProblemType> problemTypes,
        OrderType orderType) {
        User user = userService.getUserByEmail(email);

        if (problemTypes.contains(ProblemType.DRAMA) && problemTypes.contains(ProblemType.SHOW)) {
            List<History> dramaHistories = getHistories(user, ProblemType.DRAMA, orderType);
            List<Integer> dramaProblemIds = dramaHistories.stream()
                .map(history -> history.getProblemId())
                .distinct().collect(Collectors.toList());
            ProblemsResVo dramaProblemsResVo = getDramaProblems(dramaProblemIds);
            List<HistoryDto> dramaHistoryDtos = dramaHistories.stream().map(history -> {
                ProblemResVo problemResVo = dramaProblemsResVo.getProblems().stream()
                    .filter(problem -> problem.getId().equals(history.getProblemId()))
                    .findFirst().orElse(null);
                return HistoryDto.builder().history(history).problemResVo(problemResVo)
                    .build();
            }).collect(Collectors.toList());
            // ----------------------
            List<History> showHistories = getHistories(user, ProblemType.SHOW, orderType);
            List<Integer> showProblemIds = showHistories.stream()
                .map(history -> history.getProblemId())
                .distinct().collect(Collectors.toList());
            ProblemsResVo showProblemsResVo = getShowProblems(showProblemIds);
            List<HistoryDto> showHistoryDtos = showHistories.stream().map(history -> {
                ProblemResVo problemResVo = showProblemsResVo.getProblems().stream()
                    .filter(problem -> problem.getId().equals(history.getProblemId()))
                    .findFirst().orElse(null);
                return HistoryDto.builder().history(history).problemResVo(problemResVo)
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
            ProblemsResVo songProblemsResVo = getSongProblems(songProblemIds);
            List<HistoryDto> songHistoryDtos = songHistories.stream().map(history -> {
                ProblemResVo problemResVo = songProblemsResVo.getProblems().stream()
                    .filter(problem -> problem.getId().equals(history.getProblemId()))
                    .findFirst().orElse(null);
                return HistoryDto.builder().history(history).problemResVo(problemResVo)
                    .build();
            }).collect(Collectors.toList());

            return new HistoriesResDto(songHistoryDtos.size(), songHistoryDtos);
        } else if (problemTypes.equals(Arrays.asList(ProblemType.SITUATION))) {
            List<History> situationHistories = getHistories(user, ProblemType.SITUATION, orderType);
            List<Integer> situationProblemIds = situationHistories.stream()
                .map(history -> history.getProblemId())
                .distinct().collect(Collectors.toList());
            ProblemsResVo situationProblemsResVo = getSituationProblems(situationProblemIds);
            List<HistoryDto> situationHistoryDtos = situationHistories.stream().map(history -> {
                ProblemResVo problemResVo = situationProblemsResVo.getProblems().stream()
                    .filter(problem -> problem.getId().equals(history.getProblemId()))
                    .findFirst().orElse(null);
                return HistoryDto.builder().history(history).problemResVo(problemResVo)
                    .build();
            }).collect(Collectors.toList());

            return new HistoriesResDto(situationHistoryDtos.size(), situationHistoryDtos);
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

    private ProblemsResVo getDramaProblems(List<Integer> problemIds) {
        ResponseEntity<Object> response = dramaServiceClient.getDramaProblems(problemIds);
        if (response.getBody() instanceof ErrorResponse) {
            ErrorResponse errorResponse = (ErrorResponse) response.getBody();
            throw new FeignException(errorResponse.getStatus(), errorResponse.getMessage());
        }

        ObjectMapper ob = new ObjectMapper();
        ProblemsResVo dramaProblemsResVo;

        dramaProblemsResVo = ob.convertValue(response.getBody(), ProblemsResVo.class);

        return dramaProblemsResVo;
    }

    private ProblemsResVo getShowProblems(List<Integer> problemIds) {
        ResponseEntity<Object> response = showServiceClient.getShowProblems(problemIds);
        if (response.getBody() instanceof ErrorResponse) {
            ErrorResponse errorResponse = (ErrorResponse) response.getBody();
            throw new FeignException(errorResponse.getStatus(), errorResponse.getMessage());
        }

        ObjectMapper ob = new ObjectMapper();
        ProblemsResVo showProblemsResVo;

        showProblemsResVo = ob.convertValue(response.getBody(), ProblemsResVo.class);

        return showProblemsResVo;
    }

    private ProblemsResVo getSongProblems(List<Integer> problemIds) {
        ResponseEntity<Object> response = songServiceClient.getSongProblems(problemIds);
        if (response.getBody() instanceof ErrorResponse) {
            ErrorResponse errorResponse = (ErrorResponse) response.getBody();
            throw new FeignException(errorResponse.getStatus(), errorResponse.getMessage());
        }

        ObjectMapper ob = new ObjectMapper();
        ProblemsResVo songProblemsResVo;

        songProblemsResVo = ob.convertValue(response.getBody(), ProblemsResVo.class);

        return songProblemsResVo;
    }

    private ProblemsResVo getSituationProblems(List<Integer> problemIds) {
        ResponseEntity<Object> response = situationServiceClient.getSituationProblems(problemIds);
        if (response.getBody() instanceof ErrorResponse) {
            ErrorResponse errorResponse = (ErrorResponse) response.getBody();
            throw new FeignException(errorResponse.getStatus(), errorResponse.getMessage());
        }

        ObjectMapper ob = new ObjectMapper();
        ProblemsResVo situationProblemsResVo;

        situationProblemsResVo = ob.convertValue(response.getBody(), ProblemsResVo.class);

        return situationProblemsResVo;
    }

    public void addProblemHistory(HistoryReqDto historyReqDto) {
        User user = userService.getUserById(historyReqDto.getUserId());
        History history = History.builder().user(user).historyReqDto(historyReqDto).build();

        historyRepository.save(history);
    }
}
