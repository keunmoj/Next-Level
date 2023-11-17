package com.ddoya.drama.drama.repository;

import com.ddoya.drama.drama.entity.Artist;
import com.ddoya.drama.drama.entity.DramaScript;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DramaScriptRepository extends JpaRepository<DramaScript, Integer> {

    List<DramaScript> findAllByDramaProblem_IdOrderByScriptNumberAsc(Integer dramaProblemId);

    @Query(value = "select ds.artist as artist from DramaScript ds group by ds.artist having count(distinct ds.dramaProblem) >= 2")
    List<Artist> findAllArtistAppearAtLeastTwoClips();
}
