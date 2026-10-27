# Office Hours Bot

A deterministic, course-grounded Next.js prototype for 70-445. It retrieves from a small approved index derived from course lecture materials and never uses unrestricted internet sources or an LLM API.

## Run locally

```bash
pnpm install
pnpm test
pnpm dev
```

Open `http://localhost:3000`, enter any non-empty demo name, and ask “What is overfitting?”

## Prototype boundaries

- No real authentication. A typed name simulates an authenticated, enrolled student.
- No database. Any in-memory state resets whenever the server restarts or Vercel deploys.
- No payment flow is needed for this product, and no real payments are implemented.
- No document-management interface is exposed.
- The retrieval index is intentionally small, so unsupported questions receive an explicit refusal.

## Security spec audit

| Requirement | Status | Evidence and remaining gap |
|---|---|---|
| SEC-1 Authentication | Partly | The server rejects an empty identity. A real university identity provider is not connected. |
| SEC-2 Course authorization | Not at all | The demo treats any non-empty identity as enrolled; a university roster or authorization service is still required. |
| SEC-3 Document management | Partly | No upload, replace, or delete route exists, which reduces the attack surface. A future staff workflow would still need role checks. |
| SEC-4 Conversation privacy | Partly | No history-reading route exists. Durable private history would require authenticated ownership checks and a database. |
| SEC-5 Retrieved content is untrusted | Partly | Retrieved text is displayed as text and never executed, but the content has not yet been tested against instruction-like prompt injection. |
| SEC-6 Server-side input limits | Fully | The server rejects questions over 500 characters and names over 80 characters; the page mirrors both limits for usability. Real production monitoring and shared rate limiting remain outside this rule. |

## Testing

Tests are organized by user story and security requirement. Run `pnpm test` for the suite and `pnpm build` for the production build check.
