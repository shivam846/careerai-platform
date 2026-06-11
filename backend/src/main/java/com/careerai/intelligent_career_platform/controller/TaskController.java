package com.careerai.intelligent_career_platform.controller;

import com.careerai.intelligent_career_platform.service.TaskService;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/tasks")
    public ResponseEntity<Map<String, Object>> getTasksByCareer(
            @RequestParam(value = "career") String career) {
        return ResponseEntity.ok(taskService.getTaskSummary(career));
    }

    @GetMapping("/tasks/list")
    public ResponseEntity<List<Map<String, Object>>> getTaskList(
            @RequestParam(value = "career") String career) {
        return ResponseEntity.ok(taskService.getTasksByCareer(career));
    }
}
