package com.ddoya.show.tvshow.repository;

import com.ddoya.show.tvshow.entity.ShowProblem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ShowProblemRepository extends JpaRepository<ShowProblem, Long> {

    Optional<ShowProblem> findById(Integer showProblemId);

    List<ShowProblem> findAllByTvShowId(Integer tvShowId);
}

