package com.ddoya.show.tvshow.repository;

import com.ddoya.show.tvshow.entity.ShowProblem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShowClipRepository extends JpaRepository<ShowProblem, Long> {
    List<ShowProblem> findByTvShowId(Integer showId);

    List<ShowProblem> findAllByIdIn(List<Integer> problemIds);
}
