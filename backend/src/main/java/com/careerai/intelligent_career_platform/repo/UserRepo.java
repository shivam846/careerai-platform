package com.careerai.intelligent_career_platform.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.careerai.intelligent_career_platform.model.User;

public interface UserRepo extends JpaRepository<User, Long> {
    boolean existsByEmail(String email);
    User findByEmail(String email);
}
