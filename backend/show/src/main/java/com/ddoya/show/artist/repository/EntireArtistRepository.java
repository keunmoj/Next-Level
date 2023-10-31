package com.ddoya.show.artist.repository;

import com.ddoya.show.common.entity.Artist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EntireArtistRepository extends JpaRepository<Artist, Long> {
    List<Artist> findAll();
}
