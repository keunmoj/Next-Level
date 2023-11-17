package com.ddoya.auth.common.util;

import java.time.Duration;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class RedisService {

    private final RedisTemplate<String, String> redisTemplate;
    private static final String LOGOUT = "logout";

    public void setValues(String key, String data) {
        redisTemplate.opsForValue().set(key, data);
    }

    public void setValues(String key, String data, Duration duration) {
        redisTemplate.opsForValue().set(key, data, duration);
    }

    public String getValues(String key) {
        return redisTemplate.opsForValue().get(key);
    }

    public void deleteValues(String key) {
        redisTemplate.delete(key);
    }

    public boolean isLogout(String key) {
        return LOGOUT.equals(redisTemplate.opsForValue().get(key));
    }

}
