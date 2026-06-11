package com.careerai.intelligent_career_platform.controller;

import com.careerai.intelligent_career_platform.service.MoodAnalysisService;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class MoodController {
    private final MoodAnalysisService moodService;

    public MoodController(MoodAnalysisService moodService) {
        this.moodService = moodService;
    }

    @PostMapping("/mood/analyze")
    public ResponseEntity<Map<String, Object>> analyzeMood(@RequestBody Map<String, String> request) {
        String message = request.getOrDefault("message", "");
        return ResponseEntity.ok(moodService.analyzeMood(message));
    }

    @PostMapping("/mood/trend")
    public ResponseEntity<Map<String, Object>> getMoodTrend(@RequestBody List<String> messages) {
        return ResponseEntity.ok(moodService.getMoodTrend(messages));
    }
}
