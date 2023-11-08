package com.ddoya.show.tvshow.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "artist")
public class Artist {

    @Id
    @Column(name = "artist_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "is_group")
    private int isGroup;

    @Column(name = "image")
    private String image;

    @Column(name = "group_name")
    private String groupName;

    @Column(name = "artist_name")
    private String artistName;
}
