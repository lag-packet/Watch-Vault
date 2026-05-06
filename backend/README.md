# Watch Vault Backend

Spring Boot backend initialized with MySQL support.

## Requirements

- Java 21
- Maven 3.9+
- MySQL 8, or Docker for the included Compose file

## Local Database

```bash
docker compose up -d
```

The default local database settings are:

- Database: `watch_vault`
- Username: `watch_vault`
- Password: `watch_vault`
- Port: `3306`

## Run

```bash
mvn spring-boot:run
```

Environment variables can override the defaults:

- `DB_HOST`
- `DB_PORT`
- `DB_NAME`
- `DB_USERNAME`
- `DB_PASSWORD`

## Test

```bash
mvn test
```
