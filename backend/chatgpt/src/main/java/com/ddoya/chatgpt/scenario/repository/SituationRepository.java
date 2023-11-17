package com.ddoya.chatgpt.scenario.repository;

import com.ddoya.chatgpt.scenario.entity.Situation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SituationRepository extends JpaRepository<Situation, Integer> {

    List<Situation> findAll();

    Optional<Situation> findById(Integer situationId);

}
