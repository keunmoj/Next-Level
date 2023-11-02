package com.ddoya.chatgpt.chatgpt.controller;

import com.ddoya.chatgpt.chatgpt.service.ChatService;
import com.ddoya.chatgpt.common.ApiResponse;
import io.github.flashvayne.chatgpt.service.ChatgptService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chatgpt")
@RequiredArgsConstructor
public class GptController {
    private final ChatService chatService;
    @PostMapping("/custom/{subject}")
    public ResponseEntity<ApiResponse> getCustomSubject(@PathVariable String subject) {
        String message = chatService.getChatResponse(subject);
        return ResponseEntity.ok(
                ApiResponse.builder().status(HttpStatus.OK.value()).message("gpt 대답 확인").data(message)
                        .build());
    }
}
