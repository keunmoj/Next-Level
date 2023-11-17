package com.ddoya.auth.user.service;

import static com.ddoya.auth.common.oauth.HttpCookieOAuth2AuthorizationRequestRepository.REFRESH_TOKEN;

import com.ddoya.auth.common.error.ErrorCode;
import com.ddoya.auth.common.error.exception.AWSException;
import com.ddoya.auth.common.error.exception.ConflictException;
import com.ddoya.auth.common.error.exception.InvalidRequestException;
import com.ddoya.auth.common.error.exception.NotFoundException;
import com.ddoya.auth.common.jwt.JwtTokenProvider;
import com.ddoya.auth.common.oauth.CustomUserDetails;
import com.ddoya.auth.common.util.AmazonS3Uploader;
import com.ddoya.auth.common.util.CookieUtil;
import com.ddoya.auth.common.util.JwtService;
import com.ddoya.auth.common.util.TokenInfo;
import com.ddoya.auth.user.dto.request.AddInformationReqDto;
import com.ddoya.auth.user.dto.request.UpdateInformationReqDto;
import com.ddoya.auth.user.dto.response.UserInformationResDto;
import com.ddoya.auth.user.dto.response.UserRankResDto;
import com.ddoya.auth.user.dto.response.UserRanksResDto;
import com.ddoya.auth.user.entity.AttendanceScore;
import com.ddoya.auth.user.entity.Grade;
import com.ddoya.auth.user.entity.Role;
import com.ddoya.auth.user.entity.User;
import com.ddoya.auth.user.repository.UserRepository;
import java.io.IOException;
import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

    private final JwtTokenProvider jwtTokenProvider;
    private final JwtService jwtService;
    private final UserRepository userRepository;
    private final AmazonS3Uploader amazonS3Uploader;

    private static final String BASE_PROFILE_IMAGE = "mypageDefault.svg";

    public User getUserById(Long userId) {
        return userRepository.findById(userId)
            .orElseThrow(() -> new NotFoundException(ErrorCode.USER_NOT_FOUND));
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
            .orElseThrow(() -> new NotFoundException(ErrorCode.USER_NOT_FOUND));
    }

    public UserInformationResDto getUserInformation(String email) {
        User user = userRepository.findByEmail(email)
            .orElseThrow(() -> new NotFoundException(ErrorCode.USER_NOT_FOUND));

        Grade grade = Grade.getGrade(user.getScore());

        if (grade.equals(Grade.RUBY)) {
            List<User> rubyUsers = userRepository.findTop10ByScoreGreaterThanEqualOrderByScoreDesc(Grade.RUBY.getMin());
            if (rubyUsers.size() < 10) {
                grade = Grade.CHALLENGER;
            } else if (user.getScore() >= rubyUsers.get(9).getScore()) {
                grade = Grade.CHALLENGER;
            }
        }

        return UserInformationResDto.from(user, grade);
    }

    public TokenInfo addInformations(CustomUserDetails customUserDetails,
        AddInformationReqDto addInformationReqDto, MultipartFile profileImage) {

        try {
            User user = getUserByEmail(customUserDetails.getEmail());
            checkDuplicatedNickName(user, addInformationReqDto.getNickName());

            if (!Objects.isNull(profileImage) && !profileImage.isEmpty()) {
                String profileImageFileUrl = amazonS3Uploader.upload(profileImage);
                user.updateProfileImage(profileImageFileUrl);
            } else {
                user.updateProfileImage(BASE_PROFILE_IMAGE);
            }

            user.updateNickName(addInformationReqDto.getNickName());
            user.updateRole(Role.ROLE_USER);

            List<GrantedAuthority> authorities = Collections.
                singletonList(new SimpleGrantedAuthority(Role.ROLE_USER.name()));
            TokenInfo tokenInfo = jwtTokenProvider.generateToken(customUserDetails, authorities);

            Authentication authentication = jwtTokenProvider.getAuthentication(
                tokenInfo.getAccessToken());
            SecurityContextHolder.getContext().setAuthentication(authentication);
            return tokenInfo;
        } catch (IOException e) {
            throw new AWSException(ErrorCode.AMAZON_S3_ERROR);
        }
    }

    public void updateInformations(String email,
        UpdateInformationReqDto updateInformationReqDto, MultipartFile profileImage) {

        try {
            User user = getUserByEmail(email);
            checkDuplicatedNickName(user, updateInformationReqDto.getNickName());

            if (!Objects.isNull(profileImage) && !profileImage.isEmpty()) {
                String profileImageFileUrl = amazonS3Uploader.upload(profileImage);
                user.updateProfileImage(profileImageFileUrl);
            }

            user.updateNickName(updateInformationReqDto.getNickName());
        } catch (IOException e) {
            throw new AWSException(ErrorCode.AMAZON_S3_ERROR);
        }
    }

    public void attendance(String email) {
        User user = getUserByEmail(email);
        LocalDate lastAttendanceDate = user.getLastAttendanceDate();
        LocalDate today = LocalDate.now();

        if (lastAttendanceDate.isEqual(today)) {
            throw new InvalidRequestException(ErrorCode.ALREADY_ATTENDED);
        }

        if (lastAttendanceDate.plusDays(1).isEqual(today)) {
            if (!lastAttendanceDate.getMonth().equals(today.getMonth())) {
                user.initConsecutiveAttendanceDays();
            }
            user.increaseConsecutiveAttendanceDays();
            AttendanceScore attendanceScore = AttendanceScore.getScore(
                user.getConsecutiveAttendanceDays());
            if (!Objects.isNull(attendanceScore) && !attendanceScore.equals(AttendanceScore.NORMAL)) {
                user.plusScore(attendanceScore.getScore());
            }
        } else {
            user.initConsecutiveAttendanceDays();
            user.increaseConsecutiveAttendanceDays();
        }

        user.plusScore(AttendanceScore.NORMAL.getScore());
        user.updateLastAttendanceDate(today);
    }

    public TokenInfo reissue(HttpServletRequest request) {
        Optional<Cookie> cookie = CookieUtil.getCookie(request, REFRESH_TOKEN);
        if (cookie.isPresent()) {
            String token = jwtTokenProvider.resolveToken(request);
            String refreshToken = cookie.get().getValue();
            TokenInfo tokenInfo = jwtService.reissueToken(token, refreshToken);
            return tokenInfo;
        } else {
            throw new InvalidRequestException(ErrorCode.REFRESH_TOKEN_NOT_FOUND);
        }
    }

    private void checkDuplicatedNickName(User user, String nickName) {
        User foundUser = userRepository.findByNickName(nickName).orElse(null);

        if (Objects.equals(user, foundUser) || Objects.isNull(foundUser)) {
            return;
        }

        if (nickName.equals(foundUser.getNickName())) {
            throw new ConflictException(ErrorCode.ALREADY_USING_NICKNAME);
        }
    }

    public UserRanksResDto getRanks(String email) {
        User user = userRepository.findByEmail(email)
            .orElseThrow(() -> new NotFoundException(ErrorCode.USER_NOT_FOUND));
        Grade grade = Grade.getGrade(user.getScore());

        List<User> top10Users = userRepository.findTop10ByOrderByScoreDesc();

        if (grade.equals(Grade.RUBY) && top10Users.contains(user)) {
            grade = Grade.CHALLENGER;
        }
        UserRankResDto userRankResDto = UserRankResDto.from(user, grade);

        List<UserRankResDto> userRankResDtos = top10Users.stream().map(u -> {
            Grade usersGrade = Grade.getGrade(u.getScore());
            if (usersGrade.equals(Grade.RUBY)) {
                return UserRankResDto.from(u, Grade.CHALLENGER);
            } else {
                return UserRankResDto.from(u, usersGrade);
            }
        }).collect(Collectors.toList());

        return new UserRanksResDto(userRankResDtos, userRankResDto);
    }
}
