package com.ddoya.drama.drama.dto.response;

import com.ddoya.drama.drama.entity.DramaProblem;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class DramaProblemResDto {

    private Integer id;
    private String title;
    private Integer hit;
    private String clipStartTime;
    private String clipEndTime;
    private String videoId;
    private Integer size;
    private List<DramaScriptResDto> scripts;

    @Builder
    public DramaProblemResDto(DramaProblem dramaProblem, List<DramaScriptResDto> scripts) {
        this.id = dramaProblem.getId();
        this.title = dramaProblem.getProblemTitle();
        this.hit = dramaProblem.getHit();
        this.clipStartTime = dramaProblem.getStartTime();
        this.clipEndTime = dramaProblem.getEndTime();
        this.videoId = dramaProblem.getVideoId();
        this.size = scripts.size();
        this.scripts = scripts;
    }

}
