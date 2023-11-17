package com.ddoya.auth.common.oauth;

import com.ddoya.auth.common.error.ErrorCode;
import com.ddoya.auth.common.error.exception.AuthException;
import com.ddoya.auth.user.entity.Role;
import com.ddoya.auth.user.entity.User;
import com.ddoya.auth.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    private final UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest oAuth2UserRequest)
        throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(oAuth2UserRequest);

        return processOAuth2User(oAuth2UserRequest, oAuth2User);
    }

    protected OAuth2User processOAuth2User(OAuth2UserRequest oAuth2UserRequest,
        OAuth2User oAuth2User) {
        OAuth2UserInfo oAuth2UserInfo = new GoogleOAuth2UserInfo(oAuth2User.getAttributes());

        if (!StringUtils.hasText(oAuth2UserInfo.getEmail())) {
            throw new AuthException(ErrorCode.OAUTH_EMAIL_REQUIRED);
        }

        User user = userRepository.findByEmail(oAuth2UserInfo.getEmail())
            .orElseGet(() -> registerUser(oAuth2UserInfo));

        return CustomUserDetails.create(user, oAuth2UserInfo.getAttributes());
    }

    private User registerUser(OAuth2UserInfo oAuth2UserInfo) {
        User user = new User(
            oAuth2UserInfo.getId(),
            oAuth2UserInfo.getName(),
            oAuth2UserInfo.getEmail(),
            Role.ROLE_GUEST);

        return userRepository.save(user);
    }

}
