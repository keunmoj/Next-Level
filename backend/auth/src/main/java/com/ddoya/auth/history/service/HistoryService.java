package com.ddoya.auth.history.service;

import com.ddoya.auth.common.error.exception.FeignException;
import com.ddoya.auth.common.response.ErrorResponse;
import com.ddoya.auth.global.client.DramaServiceClient;
import com.ddoya.auth.history.dto.request.HistoryReqDto;
import com.ddoya.auth.history.dto.response.DramaHistoryDto;
import com.ddoya.auth.history.dto.response.HistoriesResDto;
import com.ddoya.auth.history.entity.History;
import com.ddoya.auth.history.entity.OrderType;
import com.ddoya.auth.history.entity.ProblemType;
import com.ddoya.auth.history.repository.HistoryRepository;
import com.ddoya.auth.history.vo.DramaClipResVo;
import com.ddoya.auth.history.vo.DramaClipsResVo;
import com.ddoya.auth.user.entity.User;
import com.ddoya.auth.user.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
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

    public HistoriesResDto getProblemHistories(String email, ProblemType problemType,
        OrderType orderType) {
        User user = userService.getUserByEmail(email);

        List<History> histories = getHistories(user, problemType, orderType);
        List<Integer> problemIds = histories.stream().map(history -> history.getProblemId())
            .distinct().collect(Collectors.toList());

        if (problemType.equals(ProblemType.DRAMA)) {
            DramaClipsResVo dramaClipsResVo = getDramaClips(problemIds);
            List<DramaHistoryDto> dramaHistories = histories.stream().map(history -> {
                DramaClipResVo dramaClipResVo = dramaClipsResVo.getClips().stream()
                    .filter(clip -> clip.getId().equals(history.getProblemId()))
                    .findFirst().orElse(null);
                return DramaHistoryDto.builder().history(history).dramaClipResVo(dramaClipResVo)
                    .build();
            }).collect(Collectors.toList());

            return new HistoriesResDto(dramaHistories.size(), dramaHistories);
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

    private DramaClipsResVo getDramaClips(List<Integer> problemIds) {
        ResponseEntity<Object> response = dramaServiceClient.getDramaClips(problemIds);
        if (response.getBody() instanceof ErrorResponse) {
            ErrorResponse errorResponse = (ErrorResponse) response.getBody();
            throw new FeignException(errorResponse.getStatus(), errorResponse.getMessage());
        }

        ObjectMapper ob = new ObjectMapper();
        DramaClipsResVo dramaClipsResVo;

        dramaClipsResVo = ob.convertValue(response.getBody(), DramaClipsResVo.class);

        return dramaClipsResVo;
    }

    public void addProblemHistory(HistoryReqDto historyReqDto) {
        User user = userService.getUserById(historyReqDto.getUserId());
        History history = History.builder().user(user).historyReqDto(historyReqDto).build();

        historyRepository.save(history);
    }
}
