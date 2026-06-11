package com.careerai.intelligent_career_platform.controller;

import com.careerai.intelligent_career_platform.service.JobRecommendationService;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class JobRecommendationController {
    private final JobRecommendationService service;

    public JobRecommendationController(JobRecommendationService service) {
        this.service = service;
    }

    @GetMapping("/jobs")
    public ResponseEntity<List<Map<String, String>>> getJobs(
            @RequestParam(value = "query", required = false) String query) {
        return ResponseEntity.ok(service.getRecommendations(query));
    }
}
