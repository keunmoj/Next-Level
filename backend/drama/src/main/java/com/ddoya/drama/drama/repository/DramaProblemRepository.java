package com.ddoya.drama.drama.repository;

import com.ddoya.drama.drama.entity.DramaProblem;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface DramaProblemRepository extends JpaRepository<DramaProblem, Integer> {

    List<DramaProblem> findAllByDramaId(Integer dramaId);

    @Query("select dp from DramaProblem dp where dp.id in (select distinct ds.dramaProblem from DramaScript ds where ds.artist.id = :artistId)")
    List<DramaProblem> findAllByArtistId(@Param("artistId") Integer artistId);
}
