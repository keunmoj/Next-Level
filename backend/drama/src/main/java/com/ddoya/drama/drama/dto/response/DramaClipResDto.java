package com.ddoya.drama.drama.dto.response;

import com.ddoya.drama.drama.entity.DramaProblem;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
@JsonInclude(Include.NON_NULL)
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
