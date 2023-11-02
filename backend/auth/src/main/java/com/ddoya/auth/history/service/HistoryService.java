package com.ddoya.auth.history.service;

import com.ddoya.auth.history.dto.request.HistoryReqDto;
import com.ddoya.auth.history.entity.History;
import com.ddoya.auth.history.repository.HistoryRepository;
import com.ddoya.auth.user.entity.User;
import com.ddoya.auth.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class HistoryService {

    private final HistoryRepository historyRepository;
    private final UserService userService;

    public void addProblemHistory(HistoryReqDto historyReqDto) {
        User user = userService.getUserById(historyReqDto.getUserId());
        History history = History.builder().user(user).historyReqDto(historyReqDto).build();

        historyRepository.save(history);
    }
}
