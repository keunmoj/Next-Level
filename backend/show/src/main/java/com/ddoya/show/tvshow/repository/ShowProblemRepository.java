package com.ddoya.show.tvshow.repository;

import com.ddoya.show.tvshow.entity.ShowProblem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface ShowProblemRepository extends JpaRepository<ShowProblem, Long> {

    Optional<ShowProblem> findById(Integer showProblemId);
    @Modifying
    @Transactional
    @Query("UPDATE ShowProblem s SET s.hit = s.hit + 1 WHERE s.id = :id")
    void incrementHit(@Param("id") Integer id);
    List<ShowProblem> findAllByTvShowId(Integer tvShowId);
}

