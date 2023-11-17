package com.ddoya.drama.drama.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "drama_script")
public class DramaScript {

    @Id
    @Column(name = "drama_script_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "drama_problem_id")
    private DramaProblem dramaProblem;

    @ManyToOne
    @JoinColumn(name = "artist_id")
    private Artist artist;

    @Column(name = "script_number")
    private Integer scriptNumber;

    @Column(name = "script", length = 400)
    private String script;

    @Column(name = "notation", length = 400)
    private String notation;

    @Column(name = "start_time", length = 45)
    private String startTime;
}
