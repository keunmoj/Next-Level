package com.ddoya.auth.history.repository;

import com.ddoya.auth.history.entity.History;
import com.ddoya.auth.history.entity.ProblemType;
import com.ddoya.auth.user.entity.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HistoryRepository extends JpaRepository<History, Long> {

    List<History> findAllByUserAndTypeOrderByDateDesc(User user, ProblemType type);

    List<History> findAllByUserAndTypeOrderByScoreAsc(User user, ProblemType type);

    List<History> findAllByUserAndTypeOrderByScoreDesc(User user, ProblemType type);
}
