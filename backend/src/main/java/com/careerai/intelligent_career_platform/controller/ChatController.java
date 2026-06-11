package com.careerai.intelligent_career_platform.controller;

import com.careerai.intelligent_career_platform.service.ChatService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ChatController {
    private final ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    @PostMapping("/chat")
    public ResponseEntity<Map<String, Object>> chat(@RequestBody Map<String, Object> request) {
        String message = Optional.ofNullable(request.get("message"))
                .map(Object::toString)
                .orElse("");

        List<Map<String, String>> history = new ArrayList<>();
        Object historyObj = request.get("history");
        if (historyObj instanceof List<?> rawHistory) {
            for (Object item : rawHistory) {
                if (item instanceof Map<?, ?> mapItem) {
                    String role = Optional.ofNullable(mapItem.get("role")).map(Object::toString).orElse("");
                    String content = Optional.ofNullable(mapItem.get("content")).map(Object::toString).orElse("");
                    if (!role.isBlank() && !content.isBlank()) {
                        Map<String, String> messageEntry = new HashMap<>();
                        messageEntry.put("role", role);
                        messageEntry.put("content", content);
                        history.add(messageEntry);
                    }
                }
            }
        }

        if (!message.isBlank()) {
            Map<String, String> userEntry = new HashMap<>();
            userEntry.put("role", "user");
            userEntry.put("content", message);
            history.add(userEntry);
        }

        String assistantReply;
        try {
            assistantReply = chatService.getAssistantReply(history);
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(Map.of(
                    "error", "Chat service failed.",
                    "details", ex.getMessage()
            ));
        }

        return ResponseEntity.ok(Map.of("reply", assistantReply));
    }
}
