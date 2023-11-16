package com.ddoya.chatgpt.chatgpt.service;

import com.ddoya.chatgpt.chatgpt.dto.response.ChatResponseDto;
import io.github.flashvayne.chatgpt.service.ChatgptService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChatService {
    private final ChatgptService chatgptService;

    public ChatResponseDto getCustomSubject(String subject) {
        // ChatGPT 에게 첫 질문을 던집니다.
        String prompt = "사용자가 다음과 같은 대화 주제를 원합니다. '" + subject + "'. 관련된 한개의 질문을 사용자에게 해주세요.";
        String response = chatgptService.sendMessage(prompt);
        String[] parts = response.split("\n\n", 2);
        return ChatResponseDto.builder().response(parts[1].replace("\"", "").replace("\'", "")).build();
    }

    public ChatResponseDto getNextQuestion(String subject, String request) {
        // ChatGPT 에게 과거 대화 내용에 기반한 다음 질문을 얻어옵니다.
        String prompt = "'" + subject + "'의 주제로 대화 중입니다.'" + request + "' B의 응답에 맞는 다음 A의 답변을 생성해주세요";
        String response = chatgptService.sendMessage(prompt);

        String[] parts = response.split("\n\n", 2);
        return ChatResponseDto.builder().response(parts[1].substring(3).replace("\"", "").replace("\'", "")).build();
    }

}
