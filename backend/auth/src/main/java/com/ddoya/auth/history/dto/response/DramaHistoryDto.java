package com.ddoya.auth.history.dto.response;

import com.ddoya.auth.history.entity.History;
import com.ddoya.auth.history.vo.DramaClipResVo;
import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class DramaHistoryDto {

    private Integer id;
    private LocalDate date;
    private String title;
    private Integer hit;
    private String image;

    @Builder
    public DramaHistoryDto(History history, DramaClipResVo dramaClipResVo) {
        this.id = dramaClipResVo.getId();
        this.date = history.getDate();
        this.title = dramaClipResVo.getTitle();
        this.hit = dramaClipResVo.getHit();
        this.image = dramaClipResVo.getImage();
    }
}
