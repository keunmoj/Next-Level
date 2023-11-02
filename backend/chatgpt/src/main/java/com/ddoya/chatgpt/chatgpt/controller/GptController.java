package com.ddoya.chatgpt.chatgpt.controller;

import com.ddoya.chatgpt.chatgpt.dto.GptDto;
import com.ddoya.chatgpt.chatgpt.service.ChatService;
import com.ddoya.chatgpt.common.ApiResponse;
import io.github.flashvayne.chatgpt.dto.ChatRequest;
import io.github.flashvayne.chatgpt.dto.ChatResponse;
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
    @PostMapping("/custom")
    public ResponseEntity<ApiResponse> getCustomSubject(@RequestBody GptDto.Request request) {
        System.out.println("한개의 주제 subject = " + request.getRequest());
        String prompt = "사용자가 다음과 같은 대화 주제를 원합니다. '" + request.getRequest() + "'. 관련된 한개의 질문을 사용자에게 해주세요.";
        GptDto.Response response = chatService.getChatResponse(prompt);
        return ResponseEntity.ok(
                ApiResponse.builder().status(HttpStatus.OK.value()).message("주제 선정 완료").data(response)
                        .build());
    }

    @PostMapping("/custom/talking")
    public ResponseEntity<ApiResponse> getNextResponse(@RequestBody GptDto.Request request) {
        System.out.println("사용자의 응답 = " + request.getRequest());
        String prompt = "사용자가 다음과 같이 대답했습니다. '" + request.getRequest() + "'. 사용자에게 간단하게 답변을 해주고 대화를 이어가줘";
        GptDto.Response response = chatService.getChatResponse(prompt);
        return ResponseEntity.ok(
                ApiResponse.builder().status(HttpStatus.OK.value()).message("다음 질문").data(response)
                        .build());
    }
}
