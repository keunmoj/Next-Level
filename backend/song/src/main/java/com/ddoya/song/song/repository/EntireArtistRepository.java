package com.ddoya.song.song.repository;

import com.ddoya.song.common.entity.Artist;
import com.ddoya.song.song.dto.response.ArtistDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EntireArtistRepository extends JpaRepository<Artist, Long> {

    // 가수 전체 정보 추출
    @Query("SELECT new com.ddoya.song.song.dto.response.ArtistDto(a) " +
            "FROM Artist a " +
            "WHERE a.artistId IN (SELECT s.artist.artistId " +
            "FROM SongProblem s)")
    List<ArtistDto> findSongArtists();
}
