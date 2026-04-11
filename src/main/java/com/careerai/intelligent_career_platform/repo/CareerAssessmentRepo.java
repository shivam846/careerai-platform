package com.careerai.intelligent_career_platform.repo;

import com.careerai.intelligent_career_platform.model.CareerAssessment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CareerAssessmentRepo
        extends JpaRepository<CareerAssessment, Long> {

    Optional<CareerAssessment> 
    findTopByUserIdOrderByCreatedAtDesc(Long userId);
}
