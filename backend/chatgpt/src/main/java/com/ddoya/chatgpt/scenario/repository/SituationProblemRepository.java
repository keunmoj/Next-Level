package com.ddoya.chatgpt.scenario.repository;

import com.ddoya.chatgpt.scenario.entity.SituationProblem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SituationProblemRepository extends JpaRepository<SituationProblem, Integer> {

    List<SituationProblem> findAll();
}
