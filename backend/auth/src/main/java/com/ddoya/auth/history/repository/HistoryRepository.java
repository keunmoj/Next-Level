package com.ddoya.auth.history.repository;

import com.ddoya.auth.history.entity.History;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HistoryRepository extends JpaRepository<History, Long> {

}
