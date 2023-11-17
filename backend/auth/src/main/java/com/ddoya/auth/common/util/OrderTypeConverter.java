package com.ddoya.auth.common.util;

import com.ddoya.auth.history.entity.OrderType;
import org.springframework.core.convert.converter.Converter;

public class OrderTypeConverter implements Converter<String, OrderType> {

    @Override
    public OrderType convert(String source) {
        return OrderType.of(source);
    }
}
