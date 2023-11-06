package com.ddoya.song.ranking.repository;

import com.ddoya.song.common.entity.User;
import com.ddoya.song.ranking.entity.Grade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserGradeRepository extends JpaRepository<User, Integer> {
    @Query("SELECT new com.ddoya.song.ranking.entity.Grade(g.gradeId, g.gradeName, g.score) " +
            "FROM Grade g " +
            "WHERE g.score <= (SELECT u.score FROM User u WHERE u.id = :id) " +
            "ORDER BY g.score DESC")
    List<Grade> findGradeNameByScore(@Param("id") Integer id);
}
