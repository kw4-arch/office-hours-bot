# Office Hours Bot Design Specification

## Experience

The prototype is a single-page course assistant. A student enters a name to simulate authentication, asks a focused question, and receives a short response from a fixed, approved course index. Suggested questions make the demo easy to verify.

## Architecture

- Next.js App Router frontend and server route.
- A small, version-controlled index of approved course snippets; no unrestricted internet retrieval.
- Deterministic keyword scoring selects the best-supported chunk.
- No model call, API key, database, payment provider, or identity provider.
- In-memory runtime state may reset on every deployment.

## Visual direction

An editorial, academic interface with warm paper colors, dark green, and an orange accent. The page must remain readable on mobile and desktop and must clearly distinguish student messages, assistant messages, errors, and evidence.
