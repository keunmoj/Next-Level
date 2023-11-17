package com.ddoya.song.common.dto;

import lombok.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class ApiResponse<T> {
    private String message;
    private int status;
    private T data;
}
