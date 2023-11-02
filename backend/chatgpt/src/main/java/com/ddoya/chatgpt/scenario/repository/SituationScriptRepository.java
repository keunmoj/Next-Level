package com.ddoya.chatgpt.scenario.repository;

import com.ddoya.chatgpt.scenario.dto.ScenarioScriptDto;
import com.ddoya.chatgpt.scenario.entity.Situation;
import com.ddoya.chatgpt.scenario.entity.SituationScript;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SituationScriptRepository extends JpaRepository<SituationScript, Integer> {

    List<SituationScript> findBySituationId(Integer situationId);

}
