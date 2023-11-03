package com.ddoya.song.ranking.repository;

import com.ddoya.song.common.entity.User;
import com.ddoya.song.ranking.dto.RankingDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RankingRepository extends JpaRepository<User, Integer> {
    @Query("SELECT new com.ddoya.song.ranking.dto.RankingDto.TopTenDto(u.name, u.nickname, u.score) FROM User u ORDER BY u.score DESC")
    List<RankingDto.TopTenDto> findTopTenByScore();
}
