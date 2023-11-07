package com.ddoya.song.song.repository;

import com.ddoya.song.common.entity.SongProblem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SongProblemRepository extends JpaRepository<SongProblem, Long> {

    Optional<SongProblem> findBySongProblemId(int songProblemId);

    List<SongProblem> findAllBySongProblemIdIn(List<Integer> problemIds);
}
