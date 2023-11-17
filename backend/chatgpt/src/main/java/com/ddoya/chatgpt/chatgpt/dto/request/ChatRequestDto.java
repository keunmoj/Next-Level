package com.ddoya.chatgpt.chatgpt.dto.request;

import lombok.*;


public class ChatRequestDto {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Subject{
        private String subject;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Chat{
        private String subject;
        private String request;
    }

}
