package com.ddoya.drama.drama.repository;

import com.ddoya.drama.drama.entity.DramaScript;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DramaScriptRepository extends JpaRepository<DramaScript, Integer> {

    List<DramaScript> findAllByDramaProblem_Id(Integer dramaProblemId);
}
