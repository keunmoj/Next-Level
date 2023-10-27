package com.ddoya.song.entireartist.repository;

import com.ddoya.song.common.Entity.Artist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EntireArtistRepository extends JpaRepository<Artist, Long> {

    // 가수 전체 정보 추출
    List<Artist> findAll();
}
