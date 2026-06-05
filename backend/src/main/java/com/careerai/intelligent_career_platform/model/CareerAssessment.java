package com.careerai.intelligent_career_platform.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class CareerAssessment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    private int logicScore;
    private int creativityScore;
    private int communicationScore;

    private String recommendedCareer;

    private LocalDateTime createdAt = LocalDateTime.now();

    // getters & setters
    public Long getId() { return id; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public int getLogicScore() { return logicScore; }
    public void setLogicScore(int logicScore) { this.logicScore = logicScore; }

    public int getCreativityScore() { return creativityScore; }
    public void setCreativityScore(int creativityScore) { this.creativityScore = creativityScore; }

    public int getCommunicationScore() { return communicationScore; }
    public void setCommunicationScore(int communicationScore) { this.communicationScore = communicationScore; }

    public String getRecommendedCareer() { return recommendedCareer; }
    public void setRecommendedCareer(String recommendedCareer) {
        this.recommendedCareer = recommendedCareer;
    }

    public LocalDateTime getCreatedAt() { return createdAt; }
}
