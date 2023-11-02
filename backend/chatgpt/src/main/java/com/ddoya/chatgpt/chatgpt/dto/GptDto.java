package com.ddoya.chatgpt.chatgpt.dto;

import lombok.*;

public class GptDto {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Request{
        private String request;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Response{
        private String response;
    }
}
