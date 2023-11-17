package com.ddoya.auth.user.entity;

import lombok.Getter;

@Getter
public enum Role {
    ROLE_GUEST("게스트"),
    ROLE_USER("사용자");

    private final String description;

    Role(String description) {
        this.description = description;
    }

}
