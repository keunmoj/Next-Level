package com.ddoya.show.tvshow.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "tv_show")
public class TvShow {

    @Id
    @Column(name = "tv_show_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "tv_show_title")
    private String title;

    @Column(name = "image")
    private String image;
}
