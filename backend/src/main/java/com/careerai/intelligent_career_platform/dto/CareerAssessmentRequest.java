package com.careerai.intelligent_career_platform.dto;

public record CareerAssessmentRequest(
        Long userId,
        int interestScore,
        int logicScore,
        int creativityScore,
        int communicationScore
) {}
