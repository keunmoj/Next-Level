package com.ddoya.song.ranking.repository;

import com.ddoya.song.common.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RankingRepository extends JpaRepository<User, Integer> {
    @Query("SELECT u FROM User u ORDER BY u.score DESC")
    List<User> findTopTenByScore();

}
