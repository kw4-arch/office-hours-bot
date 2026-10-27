# Homework 3 - Build and Ship

**Name:** wyulin.kevin

**Live Vercel URL:** https://office-hours-bot-eight.vercel.app/

**Public GitHub repository:** https://github.com/kw4-arch/office-hours-bot

## Part A - Put it on GitHub and on the web

### First commit file list

[INSERT SCREENSHOT: first commit file list. Confirm there is no `node_modules`, `.next`, `.env.local`, `sources`, or key file.]

### Vercel deployments

[INSERT SCREENSHOT: Vercel Deployments list showing the first deployment and later automatic deployments.]

## Part B - Build the next story, tests first

### Story built

User Story 2: As a student, I want to know where an answer came from so that I can verify the information myself.

### Scope for HW3

- Build story 2: Show the source for each course-grounded answer.
- No real payments. Where the spec says to charge a card, use a "Simulated payment" button and list real payments as a non-goal in the README.
- No sign-in provider. Where the spec needs a signed-in user, use a name typed into a text box and list real authentication as a non-goal.
- No database. Keep data in memory on the server and say in the README that it resets on every deploy.

### Criterion-to-test table

| Acceptance criterion | Test name | Passing? |
|---|---|---|
| A course-grounded answer identifies the relevant source document. | `a grounded answer identifies its source document and page` | Yes |
| The citation includes the page when available. | `a grounded answer identifies its source document and page` | Yes |

### Test and build evidence

[INSERT ACTUAL TERMINAL SCREENSHOT of the failing run. `evidence/part-b-failing-test.txt` is a summary of the earlier run; its generated PNG is not an original terminal screenshot.]

[INSERT ACTUAL TERMINAL SCREENSHOT of the passing tests and successful build. The generated PNG is a rendered summary.]

### Live URL checks

Codex ran these checks in a browser against the public Vercel URL on October 26, 2026.

| What I tried | What the spec says should happen | What happened |
|---|---|---|
| Entered `Demo Student`, asked `How do tokens and embeddings differ?`, and clicked Ask. | Return a course-grounded answer with a document and page citation. | Explained tokens and embeddings and displayed `07 - How Large Language Models Work · p. 47`. |
| Asked `What is the dining hall menu tomorrow?` | State that the answer cannot be determined from the available materials. | Refused the unsupported question and displayed no citation. |
| Left the question blank and clicked Ask. | Reject an empty question. | Displayed `Enter your name and a course question.` and added no answer. |

### Commit history

[INSERT SCREENSHOT: GitHub commit history showing the first commit plus at least two descriptive later commits.]

## Part C - Close one security gap

### Audit row before and after

| Version | Requirement | Status | Evidence and remaining gap |
|---|---|---|---|
| Before | SEC-6 Server-side input limits | Not at all | The page guides ordinary input, but the server accepts a question of any length. |
| After | SEC-6 Server-side input limits | Fully | The server rejects questions over 500 characters and names over 80 characters; the page mirrors both limits for usability. Real production monitoring and shared rate limiting remain outside this rule. |

### Test evidence

[INSERT ACTUAL TERMINAL SCREENSHOT of the SEC-6 failing run. The generated PNG is a rendered summary.]

[INSERT ACTUAL TERMINAL SCREENSHOT of all 5 tests passing and the successful build. The generated PNG is a rendered summary.]

### C-why

Draft for review: A visitor can bypass the page's character limit by sending a request directly to the server, so browser validation alone does not protect the app. The server must reject oversized inputs consistently before retrieval; an instruction to a model cannot control which requests the application accepts.

## Part D - Break someone else's app

**Classmate's live URL:** [URL]

**Classmate's repository:** [URL]

| # | What I tried (exact input or steps) | Rule it tests | What their spec says should happen | What happened | Broke? | Severity and business reason |
|---|---|---|---|---|---|---|
| 1 | [YOUR BROWSER TEST] | [STORY/SEC #] | [EXPECTED] | [OBSERVED] | [YES/NO/PARTLY] | [SEVERITY + WHO IS HURT/HOW] |
| 2 | [YOUR BROWSER TEST] | [STORY/SEC #] | [EXPECTED] | [OBSERVED] | [YES/NO/PARTLY] | [SEVERITY + WHO IS HURT/HOW] |
| 3 | [YOUR BROWSER TEST] | [STORY/SEC #] | [EXPECTED] | [OBSERVED] | [YES/NO/PARTLY] | [SEVERITY + WHO IS HURT/HOW] |
| 4 | [YOUR BROWSER TEST] | [STORY/SEC #] | [EXPECTED] | [OBSERVED] | [YES/NO/PARTLY] | [SEVERITY + WHO IS HURT/HOW] |

### D1 - New EARS requirement

[WRITE 2-3 SENTENCES: the new WHEN/IF/WHILE/WHERE requirement and how a test would prove it.]

## Part E - Memo to your manager

[WRITE 300-400 WORDS TOTAL FOR E1-E4. Include a clear launch recommendation; two important unmet audit rows and what they require in business terms; one concrete agent assumption or error plus a requirement line; and the complete cost table below.]

| Cost input | Your number | How you got it |
|---|---:|---|
| Model | [MODEL] | Ridge code or class prompt |
| Input tokens per model call | [TOKENS] | tiktokenizer.com; name the tokenizer |
| Output tokens per reply | [TOKENS] | Estimate from Ridge's word limit |
| Model calls per reply | [CALLS] | Explain tool-step assumption |
| Price per million input tokens | [$] | Official source URL and date checked |
| Price per million output tokens | [$] | Official source URL and date checked |
| Cost per request | [$] | Show arithmetic |
| Cost per day at 10,000 requests | [$] | Show arithmetic |
| Cost per 30 days | [$] | Show arithmetic |
| Hosting | [PLAN + COST] | Official source URL and date checked |

[STATE WHETHER THE ESTIMATE INCLUDES RE-SENT TOOL CONTEXT AND CONVERSATION HISTORY, AND WHY.]

[CLOSE WITH 2-3 SENTENCES ON OBSERVED/EXPECTED LATENCY AND WHAT YOU WOULD MEASURE BEFORE TRUSTING THE ESTIMATE.]

## AI use disclosure

Codex wrote the application code and tests, performed the Part B live checks, helped configure GitHub and Vercel, organized evidence, and drafted C-why and the submission structure. [ADD ANY OTHER AI USE, INCLUDING LATER COST RESEARCH OR MEMO DRAFTING, AND DESCRIBE WHO PERFORMED THE PART D ATTEMPTS.]
