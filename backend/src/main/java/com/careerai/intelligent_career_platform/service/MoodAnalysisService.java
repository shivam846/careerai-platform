package com.careerai.intelligent_career_platform.service;

import org.springframework.stereotype.Service;
import java.util.*;
import java.util.regex.Pattern;

@Service
public class MoodAnalysisService {
    private final Set<String> positiveKeywords = new HashSet<>(Arrays.asList(
        "great", "excellent", "amazing", "awesome", "love", "wonderful", "fantastic", "excited",
        "happy", "done", "completed", "success", "achieved", "proud", "confident", "good",
        "perfect", "brilliant", "impressed", "thanks", "thank", "appreciate", "helpful", "learned"
    ));

    private final Set<String> negativeKeywords = new HashSet<>(Arrays.asList(
        "stuck", "confused", "frustrated", "tired", "hard", "difficult", "struggle", "stuck",
        "stress", "anxious", "worried", "sad", "angry", "hate", "terrible", "awful", "bad",
        "failed", "error", "broken", "problem", "issue", "scared", "overwhelmed", "confused"
    ));

    public Map<String, Object> analyzeMood(String message) {
        if (message == null || message.trim().isEmpty()) {
            return createMoodResponse("Neutral", 5);
        }

        String lowerMessage = message.toLowerCase();
        int positiveScore = 0;
        int negativeScore = 0;

        for (String keyword : positiveKeywords) {
            if (lowerMessage.contains(keyword)) {
                positiveScore++;
            }
        }

        for (String keyword : negativeKeywords) {
            if (lowerMessage.contains(keyword)) {
                negativeScore++;
            }
        }

        String mood = determineMood(positiveScore, negativeScore);
        int score = calculateScore(positiveScore, negativeScore);

        return createMoodResponse(mood, score);
    }

    private String determineMood(int positive, int negative) {
        if (positive > negative && positive > 0) {
            return "Happy";
        } else if (negative > positive && negative > 0) {
            return "Stressed";
        }
        return "Neutral";
    }

    private int calculateScore(int positive, int negative) {
        // Scale 1-10: 1 = very stressed, 5 = neutral, 10 = very happy
        int net = positive - negative;
        int score = 5 + (net * 2);
        return Math.max(1, Math.min(10, score));
    }

    private Map<String, Object> createMoodResponse(String mood, int score) {
        Map<String, Object> response = new HashMap<>();
        response.put("mood", mood);
        response.put("score", score);
        response.put("recommendation", getMoodRecommendation(mood, score));
        response.put("emoji", getMoodEmoji(mood));
        return response;
    }

    private String getMoodRecommendation(String mood, int score) {
        if (mood.equals("Happy") && score >= 8) {
            return "Great progress! Try a harder task today.";
        } else if (mood.equals("Happy")) {
            return "Keep up the positive momentum! 🚀";
        } else if (mood.equals("Stressed") && score <= 3) {
            return "Take a break, drink water, and reset. You've got this! 💪";
        } else if (mood.equals("Stressed")) {
            return "Try an easier task to build confidence.";
        }
        return "Keep learning at your own pace.";
    }

    private String getMoodEmoji(String mood) {
        return switch (mood) {
            case "Happy" -> "😊";
            case "Stressed" -> "😞";
            default -> "😐";
        };
    }

    public Map<String, Object> getMoodTrend(List<String> messages) {
        if (messages.isEmpty()) {
            return new HashMap<>();
        }

        double avgScore = messages.stream()
            .map(this::analyzeMood)
            .mapToDouble(m -> ((Number) m.get("score")).doubleValue())
            .average()
            .orElse(5.0);

        Map<String, Object> trend = new HashMap<>();
        trend.put("averageScore", avgScore);
        trend.put("overallMood", avgScore >= 7 ? "Happy" : (avgScore <= 4 ? "Stressed" : "Neutral"));
        trend.put("messageCount", messages.size());
        return trend;
    }
}
