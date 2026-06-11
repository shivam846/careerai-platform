package com.careerai.intelligent_career_platform.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ChatService {
    private static final String GROQ_CHAT_URL = "https://api.groq.com/openai/v1/chat/completions";

    @Value("${groq.api.key:}")
    private String groqApiKey;

    @Value("${groq.model:llama-3.1-8b-instant}")
    private String groqModel;

    private final ObjectMapper objectMapper = new ObjectMapper();
    private final HttpClient httpClient = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(20))
            .build();

    public String getAssistantReply(List<Map<String, String>> history) throws Exception {
        String apiKey = resolveGroqApiKey();

        if (apiKey.isBlank()) {
            throw new IllegalStateException("Groq API key not configured. Set GROQ_API_KEY.");
        }

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("model", groqModel);
        requestBody.put("messages", history);
        requestBody.put("temperature", 0.7);
        requestBody.put("max_tokens", 500);

        String body = objectMapper.writeValueAsString(requestBody);

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(GROQ_CHAT_URL))
                .timeout(Duration.ofSeconds(60))
                .header("Content-Type", "application/json")
                .header("Authorization", "Bearer " + apiKey)
                .POST(HttpRequest.BodyPublishers.ofString(body))
                .build();

        HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());

        if (response.statusCode() != 200) {
            throw new IllegalStateException("Groq error " + response.statusCode() + ": " + response.body());
        }

        JsonNode json = objectMapper.readTree(response.body());
        JsonNode messageNode = json.path("choices").path(0).path("message").path("content");
        return messageNode.asText("");
    }

    private String resolveGroqApiKey() {
        if (groqApiKey != null && !groqApiKey.isBlank()) {
            return groqApiKey;
        }

        String envKey = System.getenv("GROQ_API_KEY");
        if (envKey != null && !envKey.isBlank()) {
            return envKey;
        }

        String propertyKey = System.getProperty("GROQ_API_KEY");
        return propertyKey == null ? "" : propertyKey;
    }
}
