package com.ddoya.auth.user.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.BDDAssertions.catchThrowable;
import static org.mockito.BDDMockito.given;

import com.ddoya.auth.common.error.ErrorCode;
import com.ddoya.auth.common.error.exception.InvalidRequestException;
import com.ddoya.auth.user.entity.Language;
import com.ddoya.auth.user.entity.Role;
import com.ddoya.auth.user.entity.User;
import com.ddoya.auth.user.repository.UserRepository;
import java.time.LocalDate;
import java.util.Optional;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository userRepository;

    private final String email = "test@test.com";

    @Test
    @DisplayName("출석")
    void consecutiveFiveToSix() {
        User user = new User(1L, "1", "test", Language.ko, 0, LocalDate.now().minusDays(1L), 0,
            "test", email, "http://test.com/test.png", Role.ROLE_USER);
        given(userRepository.findByEmail(email)).willReturn(Optional.of(user));

        user = userRepository.findByEmail(email).get();
        userService.attendance(user.getEmail());

        assertThat(user.getScore()).isEqualTo(5);
        assertThat(user.getConsecutiveAttendanceDays()).isEqualTo(1);
    }

    @Test
    @DisplayName("연속 출석 6일 -> 7일")
    void consecutiveSixToSeven() {
        User user = new User(1L, "1", "test", Language.ko, 0, LocalDate.now().minusDays(1L), 6,
            "test", email, "http://test.com/test.png", Role.ROLE_USER);
        given(userRepository.findByEmail(email)).willReturn(Optional.of(user));

        user = userRepository.findByEmail(email).get();
        userService.attendance(user.getEmail());

        assertThat(user.getScore()).isEqualTo(20);
    }

    @Test
    @DisplayName("2번 출석")
    void attendTwoTimes() {
        User user = new User(1L, "1", "test", Language.ko, 0, LocalDate.now().minusDays(1L), 6,
            "test", email, "http://test.com/test.png", Role.ROLE_USER);
        given(userRepository.findByEmail(email)).willReturn(Optional.of(user));

        user = userRepository.findByEmail(email).get();
        userService.attendance(user.getEmail());

        Throwable thrown = catchThrowable(() -> { userService.attendance(email); });

        assertThat(thrown).isInstanceOf(InvalidRequestException.class)
            .hasMessageContaining(ErrorCode.ALREADY_ATTENDED.getMessage());
    }

    @Test
    @DisplayName("연속 출석 끊김")
    void failToAttendConsecutively() {
        User user = new User(1L, "1", "test", Language.ko, 0, LocalDate.now().minusDays(2L), 6,
            "test", email, "http://test.com/test.png", Role.ROLE_USER);
        given(userRepository.findByEmail(email)).willReturn(Optional.of(user));

        user = userRepository.findByEmail(email).get();
        userService.attendance(user.getEmail());

        assertThat(user.getConsecutiveAttendanceDays()).isEqualTo(1);
    }
}
