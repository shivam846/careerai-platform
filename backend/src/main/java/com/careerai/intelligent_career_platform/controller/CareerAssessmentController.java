package com.careerai.intelligent_career_platform.controller;

import com.careerai.intelligent_career_platform.model.CareerAssessment;
import com.careerai.intelligent_career_platform.repo.CareerAssessmentRepo;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/assessment")
@CrossOrigin
public class CareerAssessmentController {

    private final CareerAssessmentRepo repo;

    public CareerAssessmentController(CareerAssessmentRepo repo) {
        this.repo = repo;
    }

    // ✅ SAVE assessment
    @PostMapping("/submit")
    public CareerAssessment submitAssessment(
            @RequestBody CareerAssessment assessment
    ) {
        return repo.save(assessment);
    }

    // ✅ FETCH latest assessment (Dashboard use karega)
    @GetMapping("/latest/{userId}")
    public CareerAssessment getLatestAssessment(
            @PathVariable Long userId
    ) {
        return repo
            .findTopByUserIdOrderByCreatedAtDesc(userId)
            .orElse(null);
    }
}
