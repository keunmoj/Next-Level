package com.ddoya.auth.history.service;

import com.ddoya.auth.common.error.ErrorCode;
import com.ddoya.auth.common.error.exception.FeignException;
import com.ddoya.auth.common.error.exception.InvalidRequestException;
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
import java.util.Optional;
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

        if (problemTypes.contains(ProblemType.DRAMA) && problemTypes.contains(ProblemType.SHOW)
            && orderType.equals(OrderType.LATEST)) {
            List<History> dramaHistories = getHistories(user, ProblemType.DRAMA, orderType);
            List<Integer> dramaProblemIds = getProblemIds(dramaHistories);

            ProblemsResVo dramaProblemsResVo = getProblemsByIds(ProblemType.DRAMA, dramaProblemIds);
            List<HistoryDto> dramaHistoryDtos = getHistoriesWithProblems(dramaHistories,
                dramaProblemsResVo);
            // ----------------------
            List<History> showHistories = getHistories(user, ProblemType.SHOW, orderType);
            List<Integer> showProblemIds = getProblemIds(showHistories);

            ProblemsResVo showProblemsResVo = getProblemsByIds(ProblemType.SHOW, showProblemIds);
            List<HistoryDto> showHistoryDtos = getHistoriesWithProblems(showHistories,
                showProblemsResVo);

            List<HistoryDto> solveHistories = new ArrayList<>();
            solveHistories.addAll(dramaHistoryDtos);
            solveHistories.addAll(showHistoryDtos);
            solveHistories = solveHistories.stream()
                .sorted(Comparator.comparing(HistoryDto::getDate).reversed()).collect(
                    Collectors.toList());

            return new HistoriesResDto(solveHistories.size(), solveHistories);
        } else if (problemTypes.equals(Arrays.asList(ProblemType.SONG))) {
            List<History> songHistories = getHistories(user, ProblemType.SONG, orderType);
            List<Integer> songProblemIds = getProblemIds(songHistories);

            ProblemsResVo songProblemsResVo = getProblemsByIds(problemTypes.get(0), songProblemIds);
            List<HistoryDto> songHistoryDtos = getHistoriesWithProblems(songHistories,
                songProblemsResVo);

            return new HistoriesResDto(songHistoryDtos.size(), songHistoryDtos);
        } else if (problemTypes.equals(Arrays.asList(ProblemType.SITUATION))) {
            List<History> situationHistories = getHistories(user, ProblemType.SITUATION, orderType);
            List<Integer> situationProblemIds = getProblemIds(situationHistories);

            ProblemsResVo situationProblemsResVo = getProblemsByIds(problemTypes.get(0),
                situationProblemIds);
            List<HistoryDto> situationHistoryDtos = getHistoriesWithProblems(situationHistories,
                situationProblemsResVo);

            return new HistoriesResDto(situationHistoryDtos.size(), situationHistoryDtos);
        }

        throw new InvalidRequestException(ErrorCode.INVALID_PROBLEM_ORDER_TYPE);
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

    private List<Integer> getProblemIds(List<History> histories) {
        return histories.stream().map(history -> history.getProblemId()).distinct()
            .collect(Collectors.toList());
    }

    private ProblemsResVo getProblemsByIds(ProblemType problemType, List<Integer> problemIds) {
        ResponseEntity<Object> response;

        if (problemType.equals(ProblemType.DRAMA)) {
            response = dramaServiceClient.getDramaProblems(problemIds);
        } else if (problemType.equals(ProblemType.SHOW)) {
            response = showServiceClient.getShowProblems(problemIds);
        } else if (problemType.equals(ProblemType.SONG)) {
            response = songServiceClient.getSongProblems(problemIds);
        } else {
            response = situationServiceClient.getSituationProblems(problemIds);
        }

        if (response.getBody() instanceof ErrorResponse) {
            ErrorResponse errorResponse = (ErrorResponse) response.getBody();
            throw new FeignException(errorResponse.getStatus(), errorResponse.getMessage());
        }

        ObjectMapper ob = new ObjectMapper();
        ProblemsResVo problemsResVo;

        problemsResVo = ob.convertValue(response.getBody(), ProblemsResVo.class);

        return problemsResVo;
    }

    private List<HistoryDto> getHistoriesWithProblems(List<History> histories,
        ProblemsResVo problemsResVo) {
        return histories.stream().map(history -> {
            ProblemResVo problemResVo = problemsResVo.getProblems().stream()
                .filter(problem -> problem.getId().equals(history.getProblemId())).findFirst()
                .orElse(null);
            return HistoryDto.builder().history(history).problemResVo(problemResVo).build();
        }).collect(Collectors.toList());
    }

    public Integer getRecentDramaProblemsId(Long userId) {
        Optional<History> history = historyRepository.findTopByUser_IdAndTypeOrderByIdDesc(userId,
            ProblemType.DRAMA);

        if (!history.isPresent()) {
            return null;
        }
        return history.get().getProblemId();
    }

    public Integer getRecentShowProblemsId(Long userId) {
        Optional<History> history = historyRepository.findTopByUser_IdAndTypeOrderByIdDesc(userId,
            ProblemType.SHOW);

        if (!history.isPresent()) {
            return null;
        }
        return history.get().getProblemId();
    }

    public void addProblemHistory(HistoryReqDto historyReqDto) {
        User user = userService.getUserById(historyReqDto.getUserId());

        if (historyReqDto.getType().equals(ProblemType.DRAMA) || historyReqDto.getType()
            .equals(ProblemType.SHOW)) {
            Optional<History> history = historyRepository.findByUserAndProblemIdAndType(user,
                historyReqDto.getProblemId(), historyReqDto.getType());
            if (history.isPresent()) {
                History foundHistory = history.get();
                foundHistory.updateDate(historyReqDto.getDate());
                return;
            }
        } else {
            Optional<History> history = historyRepository.findByUserAndProblemIdAndType(user,
                historyReqDto.getProblemId(), historyReqDto.getType());
            if (history.isPresent()) {
                History foundHistory = history.get();
                if (historyReqDto.getScore() > foundHistory.getScore()) {
                    user.plusScore(historyReqDto.getScore() - foundHistory.getScore());
                    foundHistory.updateScore(historyReqDto.getScore());
                    foundHistory.updateDate(historyReqDto.getDate());
                }
                return;
            }
        }

        user.plusScore(historyReqDto.getScore());
        History history = History.builder().user(user).historyReqDto(historyReqDto).build();

        historyRepository.save(history);
    }
}
