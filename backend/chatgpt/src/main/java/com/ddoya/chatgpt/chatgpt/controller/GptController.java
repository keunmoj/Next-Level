package com.ddoya.chatgpt.chatgpt.controller;

import com.ddoya.chatgpt.chatgpt.dto.request.ChatRequestDto;
import com.ddoya.chatgpt.chatgpt.dto.response.ChatResponseDto;
import com.ddoya.chatgpt.chatgpt.service.ChatService;
import com.ddoya.chatgpt.common.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chatgpt")
@RequiredArgsConstructor
//@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true", allowedHeaders = "*", methods = {
//        RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS,
//        RequestMethod.HEAD })
//@CrossOrigin("*")
public class GptController {
    private final ChatService chatService;
    @PostMapping("/custom")
    public ResponseEntity<ApiResponse> getCustomSubject(@RequestBody ChatRequestDto.Subject subject) {
        System.out.println("한개의 주제 subject = " + subject);
        ChatResponseDto response = chatService.getCustomSubject(subject.getSubject());
        return ResponseEntity.ok(
                ApiResponse.builder().status(HttpStatus.OK.value()).message("주제 선정 완료").data(response)
                        .build());
    }

    @PostMapping("/custom/talking")
    public ResponseEntity<ApiResponse> getNextQuestion(@RequestBody ChatRequestDto.Chat request) {
        System.out.println("사용자의 응답 = " + request.getRequest());
        ChatResponseDto response = chatService.getNextQuestion(request.getSubject(), request.getRequest());
        return ResponseEntity.ok(
                ApiResponse.builder().status(HttpStatus.OK.value()).message("다음 질문").data(response)
                        .build());
    }
}
