package com.ddoya.drama.drama.dto.response;

import com.ddoya.drama.drama.entity.DramaProblem;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class DramaClipResDto {

    private Integer dramaProblemId;
    private String title;
    private Integer hit;
    private String startTime;
    private String endTime;
    private String image;
    private String videoId;

    @Builder
    public DramaClipResDto(DramaProblem dramaProblem) {
        this.dramaProblemId = dramaProblem.getId();
        this.title = dramaProblem.getProblemTitle();
        this.hit = dramaProblem.getHit();
        this.startTime = dramaProblem.getStartTime();
        this.endTime = dramaProblem.getEndTime();
        this.image = dramaProblem.getImage();
        this.videoId = dramaProblem.getVideoId();
    }
}
