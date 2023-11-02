package com.ddoya.chatgpt.scenario.repository;

import com.ddoya.chatgpt.scenario.entity.Situation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EntireScenarioRepository extends JpaRepository<Situation, Long> {

    List<Situation> findAll();
}
