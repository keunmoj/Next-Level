package com.ddoya.show.tvshow.repository;

import com.ddoya.show.tvshow.dto.response.ArtistDto;
import com.ddoya.show.tvshow.entity.Artist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EntireArtistRepository extends JpaRepository<Artist, Long> {

    @Query("SELECT new com.ddoya.show.tvshow.dto.response.ArtistDto(a.id, a.artistName) " +
            "FROM Artist a " +
            "WHERE a.id IN (SELECT p.artist.id " +
            "FROM ShowProblem p " +
            "GROUP BY p.artist.id " +
            "HAVING COUNT(p) >= 2)")
    List<ArtistDto> findShowArtists();
}
