package com.ddoya.chatgpt.scenario.repository;

import com.ddoya.chatgpt.scenario.entity.SituationProblemScript;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SituationProblemScriptRepository extends JpaRepository<SituationProblemScript, Integer> {

    List<SituationProblemScript> findBySituationProblemSituationProblemIdOrderByScriptNumber(Integer situationProblemId);

}
