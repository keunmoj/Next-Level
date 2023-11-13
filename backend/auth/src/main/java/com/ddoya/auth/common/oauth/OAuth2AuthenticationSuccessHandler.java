package com.ddoya.auth.common.oauth;

import static com.ddoya.auth.common.oauth.HttpCookieOAuth2AuthorizationRequestRepository.REDIRECT_URI_PARAM_COOKIE_NAME;
import static com.ddoya.auth.common.oauth.HttpCookieOAuth2AuthorizationRequestRepository.REFRESH_TOKEN;

import com.ddoya.auth.common.error.ErrorCode;
import com.ddoya.auth.common.error.exception.InvalidRequestException;
import com.ddoya.auth.common.jwt.JwtTokenProvider;
import com.ddoya.auth.common.util.CookieUtil;
import com.ddoya.auth.common.util.TokenInfo;
import com.ddoya.auth.user.entity.Role;
import java.io.IOException;
import java.net.URI;
import java.util.Optional;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.util.UriComponentsBuilder;

@Slf4j
@Component
@RequiredArgsConstructor
public class OAuth2AuthenticationSuccessHandler extends
    SimpleUrlAuthenticationSuccessHandler {

    @Value("${app.oauth2.authorizedRedirectUri}")
    private String redirectUri;
    private final JwtTokenProvider jwtTokenProvider;
    private final HttpCookieOAuth2AuthorizationRequestRepository cookieAuthorizationRequestRepository;

    @Transactional
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
        Authentication authentication)
        throws IOException {
        String targetUrl = determineTargetUrl(request, response, authentication);

        if (response.isCommitted()) {
            log.debug("Response has already been committed.");
            return;
        }
        clearAuthenticationAttributes(request, response);
        getRedirectStrategy().sendRedirect(request, response, targetUrl);
    }

    protected String determineTargetUrl(HttpServletRequest request, HttpServletResponse response,
        Authentication authentication) {
        Optional<String> redirectUri = CookieUtil.getCookie(request, REDIRECT_URI_PARAM_COOKIE_NAME)
            .map(Cookie::getValue);

        if (redirectUri.isPresent() && !isAuthorizedRedirectUri(redirectUri.get())) {
            throw new InvalidRequestException(ErrorCode.UNAUTHORIZED_REDIRECT_URI);
        }
        String targetUrl = redirectUri.orElse(getDefaultTargetUrl());

        TokenInfo tokenInfo = jwtTokenProvider.generateToken(authentication);

        CookieUtil.deleteCookie(request, response, REFRESH_TOKEN);
        CookieUtil.addCookie(response, REFRESH_TOKEN, tokenInfo.getRefreshToken(),
            tokenInfo.getRefreshTokenExpirationTime().intValue());

        return UriComponentsBuilder.fromUriString(targetUrl)
            .queryParam("token", tokenInfo.getAccessToken())
            .queryParam("role", authentication.getAuthorities().contains(new SimpleGrantedAuthority(Role.ROLE_GUEST.name()))
                ? Role.ROLE_GUEST.name() : Role.ROLE_USER.name())
            .build().toUriString();
    }

    protected void clearAuthenticationAttributes(HttpServletRequest request,
        HttpServletResponse response) {
        super.clearAuthenticationAttributes(request);
        cookieAuthorizationRequestRepository.removeAuthorizationRequestCookies(request, response);
    }

    private boolean isAuthorizedRedirectUri(String uri) {
        URI clientRedirectUri = URI.create(uri);
        URI authorizedUri = URI.create(redirectUri);

        return authorizedUri.getHost().equalsIgnoreCase(clientRedirectUri.getHost())
            && authorizedUri.getPort() == clientRedirectUri.getPort();
    }
}
