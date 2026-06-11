package com.careerai.intelligent_career_platform.service;

import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class JobRecommendationService {
    public List<Map<String, String>> getRecommendations(String career) {
        String q = (career == null || career.isBlank()) ? "jobs" : career.trim().replaceAll("\\s+", "+");
        List<Map<String, String>> list = new ArrayList<>();

        list.add(Map.of("portal", "Naukri", "url", "https://www.naukri.com/" + q + "-jobs"));
        list.add(Map.of("portal", "Indeed", "url", "https://www.indeed.com/jobs?q=" + q));
        list.add(Map.of("portal", "Internshala", "url", "https://internshala.com/internships/keywords-" + q));
        list.add(Map.of("portal", "LinkedIn", "url", "https://www.linkedin.com/jobs/search?keywords=" + q));
        list.add(Map.of("portal", "Glassdoor", "url", "https://www.glassdoor.com/Job/jobs.htm?sc.keyword=" + q));

        return list;
    }
}
