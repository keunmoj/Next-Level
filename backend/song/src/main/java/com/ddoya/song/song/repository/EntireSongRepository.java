package com.ddoya.song.song.repository;

import com.ddoya.song.common.Entity.SongProblem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EntireSongRepository extends JpaRepository<SongProblem, Long> {

    // 노래 전체 정보 추출
    List<SongProblem> findAll();

}
