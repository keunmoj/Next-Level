package com.ddoya.show.tvshow.repository;

import com.ddoya.show.tvshow.entity.TvShow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EntireShowRepository extends JpaRepository<TvShow, Long> {
    @Query(value = "SELECT s.tv_show_id, s.tv_show_title, s.image, sum(p.hit) " +
            "FROM tv_show s " +
            "LEFT JOIN show_problem p ON s.tv_show_id = p.tv_show_id " +
            "GROUP BY s.tv_show_id " +
            "ORDER BY sum(p.hit) desc ", nativeQuery = true)
    List<TvShow> findAllByHit();

    TvShow findById(Integer showId);
}
