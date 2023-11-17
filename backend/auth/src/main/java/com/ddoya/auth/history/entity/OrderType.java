package com.ddoya.auth.history.entity;

import com.ddoya.auth.common.error.ErrorCode;
import com.ddoya.auth.common.error.exception.InvalidRequestException;
import java.util.stream.Stream;
import lombok.Getter;

@Getter
public enum OrderType {

    LATEST, HIGHEST, LOWEST;

    public static OrderType of(String orderType) {
        return Stream.of(OrderType.values())
            .filter(type -> type.name().equalsIgnoreCase(orderType))
            .findFirst()
            .orElseThrow(() -> new InvalidRequestException(ErrorCode.INVALID_ORDER_TYPE));
    }
}
