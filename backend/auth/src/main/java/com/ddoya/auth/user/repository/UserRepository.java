package com.ddoya.auth.user.repository;

import com.ddoya.auth.user.entity.User;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    Optional<User> findByNickName(String nickName);

    List<User> findTop10ByScoreGreaterThanEqualOrderByScoreDesc(Integer score);

    List<User> findTop10ByOrderByScoreDesc();

}
