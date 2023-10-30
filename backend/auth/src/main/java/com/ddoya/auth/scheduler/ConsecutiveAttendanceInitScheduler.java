package com.ddoya.auth.scheduler;

import com.ddoya.auth.user.entity.User;
import com.ddoya.auth.user.repository.UserRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ConsecutiveAttendanceInitScheduler {

    private final UserRepository userRepository;

    @Scheduled(cron = "0 0 0 1 * ?") // 매월 1일 0시에 실행
    public void init(){
        List<User> userList = userRepository.findAll();

        userList.stream().forEach((user) -> user.initConsecutiveAttendanceDays());
    }

}
