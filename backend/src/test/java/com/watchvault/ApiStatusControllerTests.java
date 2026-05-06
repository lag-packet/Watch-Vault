package com.watchvault;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;

class ApiStatusControllerTests {

    @Test
    void statusReturnsServiceHealth() {
        ApiStatusController controller = new ApiStatusController();

        ApiStatusController.ApiStatus status = controller.status();

        assertThat(status.status()).isEqualTo("ok");
        assertThat(status.service()).isEqualTo("watch-vault-backend");
        assertThat(status.timestamp()).isNotNull();
    }
}
