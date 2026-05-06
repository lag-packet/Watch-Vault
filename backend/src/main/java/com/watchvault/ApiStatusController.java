package com.watchvault;

import java.time.Instant;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiStatusController {

    @GetMapping("/api/status")
    public ApiStatus status() {
        return new ApiStatus("ok", "watch-vault-backend", Instant.now());
    }

    public record ApiStatus(String status, String service, Instant timestamp) {
    }
}
