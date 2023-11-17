package com.ddoya.chatgpt.scenario.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "situation_script")
public class SituationScript {

    @Id
    @Column(name = "situation_script_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int situationScriptId;

    @Column(name = "script_number")
    private int scriptNumber;

    @Column(name = "script")
    private String script;

    @ManyToOne
    @JoinColumn(name = "situation_id")
    private Situation situation;
}
