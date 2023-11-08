package com.ddoya.show.tvshow.repository;

import com.ddoya.show.tvshow.entity.ShowProblem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ShowProblemRepository extends JpaRepository<ShowProblem, Long> {

    Optional<ShowProblem> findById(int showProblemId);
}

