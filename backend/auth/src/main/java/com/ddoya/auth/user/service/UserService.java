package com.ddoya.auth.user.service;

import static com.ddoya.auth.common.oauth.HttpCookieOAuth2AuthorizationRequestRepository.REFRESH_TOKEN;

import com.ddoya.auth.common.error.ErrorCode;
import com.ddoya.auth.common.error.exception.InvalidRequestException;
import com.ddoya.auth.common.error.exception.NotFoundException;
import com.ddoya.auth.common.jwt.JwtTokenProvider;
import com.ddoya.auth.common.oauth.CustomUserDetails;
import com.ddoya.auth.common.util.CookieUtil;
import com.ddoya.auth.common.util.JwtService;
import com.ddoya.auth.common.util.TokenInfo;
import com.ddoya.auth.user.dto.request.AddInformationRequestDto;
import com.ddoya.auth.user.dto.request.UpdateInformationRequestDto;
import com.ddoya.auth.user.dto.response.UserInformationResponseDto;
import com.ddoya.auth.user.entity.Role;
import com.ddoya.auth.user.entity.User;
import com.ddoya.auth.user.repository.UserRepository;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

    private final JwtTokenProvider jwtTokenProvider;
    private final JwtService jwtService;
    private final UserRepository userRepository;

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
            .orElseThrow(() -> new NotFoundException(ErrorCode.USER_NOT_FOUND));
    }

    public UserInformationResponseDto getUserInformation(String email) {
        User user = userRepository.findByEmail(email)
            .orElseThrow(() -> new NotFoundException(ErrorCode.USER_NOT_FOUND));
        return UserInformationResponseDto.from(user);
    }

    public TokenInfo addInformations(CustomUserDetails customUserDetails, AddInformationRequestDto addInformationRequestDto) {
        User user = getUserByEmail(customUserDetails.getEmail());
        user.updateNickName(addInformationRequestDto.getNickName());
        user.updateLanguage(addInformationRequestDto.getLanguage());
        user.updateRole(Role.ROLE_USER);
        List<GrantedAuthority> authorities = Collections.
            singletonList(new SimpleGrantedAuthority(Role.ROLE_USER.name()));
        TokenInfo tokenInfo = jwtTokenProvider.generateToken(customUserDetails, authorities);

        Authentication authentication = jwtTokenProvider.getAuthentication(
            tokenInfo.getAccessToken());
        SecurityContextHolder.getContext().setAuthentication(authentication);
        return tokenInfo;
    }

    public void updateInformations(String email,
        UpdateInformationRequestDto updateInformationRequestDto) {
        User user = getUserByEmail(email);
        user.updateNickName(updateInformationRequestDto.getNickName());
        user.updateLanguage(updateInformationRequestDto.getLanguage());
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
}
