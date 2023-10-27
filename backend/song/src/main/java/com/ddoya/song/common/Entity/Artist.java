package com.ddoya.song.common.Entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "artist")
public class Artist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int artistId;

    @Column(name = "is_group")
    private int isGroup;

    @Column(name = "image")
    private String image;

    @Column(name = "group_name")
    private String groupName;

    @Column(name = "artist_name")
    private String artistName;
}
