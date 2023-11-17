package com.ddoya.song.song.repository;

import com.ddoya.song.common.entity.SongProblem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface SongProblemRepository extends JpaRepository<SongProblem, Long> {

    Optional<SongProblem> findBySongProblemId(int songProblemId);

    List<SongProblem> findAllBySongProblemIdIn(List<Integer> problemIds);

    @Modifying
    @Transactional
    @Query("UPDATE SongProblem s SET s.hit = s.hit + 1 WHERE s.id = :id")
    void incrementHit(@Param("id") Integer id);
}
