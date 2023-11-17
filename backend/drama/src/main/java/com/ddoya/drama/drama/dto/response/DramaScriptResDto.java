package com.ddoya.drama.drama.dto.response;

import com.ddoya.drama.drama.entity.DramaScript;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class DramaScriptResDto {

    private String artistName;
    private Integer scriptNumber;
    private String script;
    private String notation;
    private String startTime;

    @Builder
    public DramaScriptResDto(DramaScript dramaScript) {
        this.artistName = dramaScript.getArtist().getArtistName();
        this.scriptNumber = dramaScript.getScriptNumber();
        this.script = dramaScript.getScript();
        this.notation = dramaScript.getNotation();
        this.startTime = dramaScript.getStartTime();
    }
}
