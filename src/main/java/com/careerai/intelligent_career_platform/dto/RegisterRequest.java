package com.careerai.intelligent_career_platform.dto;

import com.careerai.intelligent_career_platform.model.UserType;

public record RegisterRequest(
        String name,
        String email,
        String password,
        UserType userType
) {}
