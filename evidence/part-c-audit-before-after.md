# SEC-6 audit row before and after

## Before

| Requirement | Status | Evidence and remaining gap |
|---|---|---|
| SEC-6 Server-side input limits | Not at all | The page guides ordinary input, but the server currently accepts a question of any length. |

## After

| Requirement | Status | Evidence and remaining gap |
|---|---|---|
| SEC-6 Server-side input limits | Fully | The server rejects questions over 500 characters and names over 80 characters; the page mirrors both limits for usability. Real production monitoring and shared rate limiting remain outside this rule. |
