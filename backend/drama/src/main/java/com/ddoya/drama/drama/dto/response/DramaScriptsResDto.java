package com.ddoya.drama.drama.dto.response;

import java.util.List;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class DramaScriptsResDto {

    private Integer dramaProblemId;
    private String dramaTitle;
    private String problemTitle;
    private Integer hit;
    private String startTime;
    private String endTime;
    private String videoId;
    private List<DramaScriptResDto> dramaScripts;

}
