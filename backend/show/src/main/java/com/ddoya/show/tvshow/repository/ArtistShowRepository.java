package com.ddoya.show.tvshow.repository;

import com.ddoya.show.tvshow.entity.ShowProblem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArtistShowRepository extends JpaRepository<ShowProblem, Long> {

    List<ShowProblem> findByArtist_Id(int artist_id);
}

