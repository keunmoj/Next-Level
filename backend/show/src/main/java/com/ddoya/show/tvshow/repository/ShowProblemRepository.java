package com.ddoya.show.tvshow.repository;

import com.ddoya.show.common.entity.ShowProblem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ShowProblemRepository extends JpaRepository<ShowProblem, Long> {

    Optional<ShowProblem> findByShowProblemId(int showProblemId);
}

