package com.ddoya.drama.drama.dto.response;

import com.ddoya.drama.drama.entity.Drama;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class DramaResDto {

    private Integer id;

    private String title;

    @Builder
    public DramaResDto(Drama drama) {
        this.id = drama.getId();
        this.title = drama.getTitle();
    }

}
