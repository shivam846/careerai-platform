package com.careerai.intelligent_career_platform.dto;

import com.careerai.intelligent_career_platform.model.UserType;

public record LoginResponse(
        Long id,
        String name,
        String email,
        UserType userType
) {}
