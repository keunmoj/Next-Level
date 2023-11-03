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

//    @OneToMany(mappedBy = "situation", fetch = FetchType.LAZY)
//    private List<SituationScript> scripts = new ArrayList<>();
}
