package com.ddoya.auth.user.controller;

import static com.ddoya.auth.common.oauth.HttpCookieOAuth2AuthorizationRequestRepository.REFRESH_TOKEN;

import com.ddoya.auth.common.oauth.CustomUserDetails;
import com.ddoya.auth.common.response.ApiResponse;
import com.ddoya.auth.common.util.CookieUtil;
import com.ddoya.auth.common.util.CurrentUser;
import com.ddoya.auth.common.util.TokenInfo;
import com.ddoya.auth.user.dto.response.UserInformationResponseDto;
import com.ddoya.auth.user.service.UserService;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/auth/user")
@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    public ResponseEntity<ApiResponse> getUserInformation(
        @CurrentUser CustomUserDetails userDetails) {

        UserInformationResponseDto userInformationResponseDto = userService.getUserInformation(
            userDetails.getEmail());

        return ResponseEntity.ok(
            ApiResponse.builder().status(HttpStatus.OK.value()).message("유저 정보ㄱ").data(userInformationResponseDto)
                .build());
    }

    @PostMapping("/reissue")
    public ResponseEntity<ApiResponse> reissue(HttpServletRequest request,
        HttpServletResponse response) {
        TokenInfo tokenInfo = userService.reissue(request);
        CookieUtil.addCookie(response, REFRESH_TOKEN, tokenInfo.getRefreshToken(),
            60 * 60 * 24 * 7);

        return ResponseEntity.ok(
            ApiResponse.builder().message("reissue").status(HttpStatus.OK.value())
                .data(tokenInfo.getAccessToken()).build());
    }
}

