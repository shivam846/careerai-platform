//package com.example.demo.controller;
package com.careerai.intelligent_career_platform.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class PredictionController {

    @PostMapping("/predict-career")
    public ResponseEntity<?> predictCareer(@RequestBody Map<String, Object> input) {

        String flaskUrl = "http://localhost:5000/predict";

        RestTemplate restTemplate = new RestTemplate();

        // 🔥 Flask ko request bhejna
        ResponseEntity<Map> response = restTemplate.postForEntity(
                flaskUrl,
                input,
                Map.class
        );

        // 🔥 Flask ka response return karna
        return ResponseEntity.ok(response.getBody());
    }
}