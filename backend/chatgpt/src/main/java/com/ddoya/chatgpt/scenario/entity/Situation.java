package com.ddoya.chatgpt.scenario.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "situation")
public class Situation {

    @Id
    @Column(name = "situation_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "situation_title")
    private String title;

    @Column(name = "image")
    private String image;

    @Column(name = "explain")
    private String explain;
}
