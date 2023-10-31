package com.ddoya.show.artist.repository;

import com.ddoya.show.common.entity.ShowProblem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArtistShowRepository extends JpaRepository<ShowProblem, Long> {

    List<ShowProblem> findByArtist_ArtistId(int artist_id);
}

