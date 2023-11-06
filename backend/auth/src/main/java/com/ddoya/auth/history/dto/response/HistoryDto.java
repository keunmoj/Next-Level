package com.ddoya.auth.history.dto.response;

import com.ddoya.auth.history.entity.History;
import com.ddoya.auth.history.vo.ClipResVo;
import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class HistoryDto {

    private Integer id;
    private LocalDate date;
    private String title;
    private Integer score;
    private Integer hit;
    private String image;

    @Builder
    public HistoryDto(History history, ClipResVo clipResVo) {
        this.id = clipResVo.getId();
        this.date = history.getDate();
        this.title = clipResVo.getTitle();
        this.score = history.getScore();
        this.hit = clipResVo.getHit();
        this.image = clipResVo.getImage();
    }
}
