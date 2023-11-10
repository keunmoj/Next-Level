package com.ddoya.chatgpt.scenario.repository;

import com.ddoya.chatgpt.scenario.dto.response.SituationProblemResDto;
import com.ddoya.chatgpt.scenario.entity.SituationProblem;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SituationProblemRepository extends JpaRepository<SituationProblem, Integer> {

    List<SituationProblem> findAll();

    Optional<SituationProblem> findBySituationProblemId(Integer situationProblemId);

    @Query("select new com.ddoya.chatgpt.scenario.dto.response.SituationProblemResDto(sp.situationProblemId, s.title, s.image) from SituationProblem sp inner join sp.situation s where sp.situationProblemId in :problemIds")
    List<SituationProblemResDto> findAllByIdIn(@Param("problemIds") List<Integer> problemIds);

}
