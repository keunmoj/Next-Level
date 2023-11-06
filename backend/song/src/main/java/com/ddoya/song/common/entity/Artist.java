package com.ddoya.song.common.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "artist")
public class Artist {

    @Id
    @Column(name = "artist_id")
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
