package com.ddoya.auth.common.util;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class TokenInfo {

    private String grantType;
    private String accessToken;
    private Long accessTokenExpirationTime;
    private String refreshToken;
    private Long refreshTokenExpirationTime;
}
