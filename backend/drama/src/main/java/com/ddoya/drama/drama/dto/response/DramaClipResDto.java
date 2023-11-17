package com.ddoya.drama.drama.dto.response;

import com.ddoya.drama.drama.entity.DramaProblem;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class DramaClipResDto {

    private Integer id;
    private String title;
    private Integer hit;
    private String image;

    @Builder
    public DramaClipResDto(DramaProblem dramaProblem) {
        this.id = dramaProblem.getId();
        this.title = dramaProblem.getProblemTitle();
        this.hit = dramaProblem.getHit();
        this.image = dramaProblem.getImage();
    }
}
