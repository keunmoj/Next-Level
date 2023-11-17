package com.ddoya.song.song.repository;

import com.ddoya.song.common.entity.SongProblem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ArtistSongRepository extends JpaRepository<SongProblem, Long> {
    List<SongProblem> findByArtist_ArtistId(int artist_id);
}
