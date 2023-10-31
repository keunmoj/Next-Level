package com.ddoya.show.tvshow.repository;

import com.ddoya.show.common.entity.TvShow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EntireShowRepository extends JpaRepository<TvShow, Long> {
    List<TvShow> findAll();
}
