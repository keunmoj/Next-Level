package com.ddoya.chatgpt.chatgpt.service;

import com.ddoya.chatgpt.chatgpt.dto.GptDto;
import io.github.flashvayne.chatgpt.dto.ChatRequest;
import io.github.flashvayne.chatgpt.dto.ChatResponse;
import io.github.flashvayne.chatgpt.service.ChatgptService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChatService {
    private final ChatgptService chatgptService;

    public GptDto.Response getChatResponse(String request) {
        // ChatGPT 에게 질문을 던집니다.
        String response = chatgptService.sendMessage(request);
        return GptDto.Response.builder().response(response).build();
    }
}
