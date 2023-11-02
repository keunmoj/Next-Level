package com.ddoya.chatgpt.scenario.entity;

import lombok.Data;

import javax.persistence.*;

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
}
