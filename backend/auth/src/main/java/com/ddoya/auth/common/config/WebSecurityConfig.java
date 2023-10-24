package com.ddoya.auth.common.config;

import com.ddoya.auth.common.jwt.JwtAuthenticationFilter;
import com.ddoya.auth.common.jwt.JwtTokenProvider;
import com.ddoya.auth.common.oauth.CustomOAuth2UserService;
import com.ddoya.auth.common.oauth.HttpCookieOAuth2AuthorizationRequestRepository;
import com.ddoya.auth.common.oauth.OAuth2AuthenticationFailureHandler;
import com.ddoya.auth.common.oauth.OAuth2AuthenticationSuccessHandler;
import com.ddoya.auth.common.util.RedisService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
@Configuration
@RequiredArgsConstructor
public class WebSecurityConfig {

    private final CustomOAuth2UserService customOAuth2UserService;
    private final JwtTokenProvider jwtTokenProvider;
    private final RedisService redisService;
    private final HttpCookieOAuth2AuthorizationRequestRepository cookieAuthorizationRequestRepository;
    private final OAuth2AuthenticationSuccessHandler oAuth2AuthenticationSuccessHandler;
    private final OAuth2AuthenticationFailureHandler oAuth2AuthenticationFailureHandler;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .cors()
            .and()
            .httpBasic().disable()
            .csrf().disable()
            .formLogin().disable()
            .rememberMe().disable()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.authorizeRequests()
            .antMatchers("/", "/login/oauth2/**", "/**").permitAll()
            .anyRequest().authenticated();

        //oauth2Login
        http.oauth2Login()
            .authorizationEndpoint().baseUri("/oauth2/authorization")
            .authorizationRequestRepository(
                cookieAuthorizationRequestRepository)
            .and()
            .redirectionEndpoint().baseUri("/login/oauth2/code/google")
            .and()
            .userInfoEndpoint().userService(customOAuth2UserService)  // 회원 정보 처리
            .and()
            .successHandler(oAuth2AuthenticationSuccessHandler)
            .failureHandler(oAuth2AuthenticationFailureHandler);

        http.logout()
            .clearAuthentication(true)
            .deleteCookies("JSESSIONID");

        http.addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider, redisService),
            UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
