package com.ddoya.chatgpt.scenario.dto.response;

import com.ddoya.chatgpt.scenario.entity.Situation;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class SituationProblemResDto {

    private int id;
    private String title;
    private String image;

    @Builder
    public SituationProblemResDto(Situation situation) {
        this.id = situation.getId();
        this.title = situation.getTitle();
        this.image = situation.getImage();
    }
}
