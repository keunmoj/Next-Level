package com.ddoya.song.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOrigins("http://localhost:5173", "http://127.0.0.1:5173",
                "http://localhost:9001", "http://127.0.0.1:9001", "http://k9e204.p.ssafy.io",
                "https://k9e204.p.ssafy.io")
            .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
//            .allowedHeaders("Authorization", "X-Authorization-Id", "Access-Control-Allow-Origin",
//                "Access-Control-Allow-Credentials", "Content-Type")
//            .exposedHeaders("Authorization", "X-Authorization-Id", "Access-Control-Allow-Origin",
//                "Access-Control-Allow-Credentials")
            .allowedHeaders("*")
            .allowCredentials(true)
            .maxAge(3600);
    }
}
