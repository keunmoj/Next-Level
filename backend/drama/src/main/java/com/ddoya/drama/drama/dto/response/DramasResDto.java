package com.ddoya.drama.drama.dto.response;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class DramasResDto {

    private Integer size;
    private List<DramaResDto> dramas;
}
