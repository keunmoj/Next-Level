package com.ddoya.auth.history.repository;

import com.ddoya.auth.history.entity.History;
import com.ddoya.auth.history.entity.ProblemType;
import com.ddoya.auth.user.entity.User;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface HistoryRepository extends JpaRepository<History, Long> {

    Optional<History> findByUserAndProblemIdAndType(User user, Integer problemId, ProblemType type);

    List<History> findAllByUserAndTypeOrderByDateDesc(User user, ProblemType type);

    List<History> findAllByUserAndTypeOrderByScoreAsc(User user, ProblemType type);

    List<History> findAllByUserAndTypeOrderByScoreDesc(User user, ProblemType type);

    Optional<History> findTopByUser_IdAndTypeOrderByIdDesc(Long userId, ProblemType type);
}
