package com.ddoya.drama.drama.repository;

import com.ddoya.drama.drama.dto.response.DramaResDto;
import com.ddoya.drama.drama.entity.Drama;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DramaRepository extends JpaRepository<Drama, Integer> {

    @Query("SELECT new com.ddoya.drama.drama.dto.response.DramaResDto(d.id, d.title, CAST(SUM(dp.hit) AS int), d.image) FROM Drama d INNER JOIN DramaProblem dp ON d.id = dp.drama.id GROUP BY d.id")
    List<DramaResDto> findAllByHit();
}
