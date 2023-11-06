package com.ddoya.evaluate.evaluate.dto;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

public class EvaluateDto {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Request{
        private MultipartFile wavFile;
        private String script;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Response{
        private String script;
        private Integer score;
    }

}
