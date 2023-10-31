package com.ddoya.show.common.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "tv_show")
public class TvShow {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int tvShowId;

    @Column(name = "tv_show_title")
    private String tvShowTitle;
}
