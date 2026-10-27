# Evidence status

The fail/pass text files summarize real development runs recorded in the Codex chat on October 26, 2026. The PNG files were generated from those summaries with `scripts/render_evidence.py`; they are rendered summaries, not original screenshots of a terminal. Do not describe them as terminal screenshots in the submission.

The assignment requests screenshots of the actual failing and passing runs. Capture actual terminal output for any further tests-first change as it happens. The earlier raw run output remains in the chat; the summary images do not independently establish its provenance.

The checks in `part-b-live-checks.md` were repeated in a browser against the public Vercel URL after the first production deployment. The file identifies the URL and observed results. These are Part B checks performed by Codex, not the student's Part D red-team attempts.

Git was initialized after the existing app and security fix had been implemented. The first commit records their current state. Do not describe later documentation commits as the original feature or security-fix commits, or backdate commits to imply a development sequence that Git did not record.

## Actual browser screenshots

The following files are actual browser captures saved on October 26, 2026, rather than generated visual summaries:

- `github-first-commit-actual.png`: the root file list at commit `a82f974`.
- `github-commit-history-actual.png`: the initial commit plus two later documentation commits.
- `vercel-deployments-actual.png`: three Ready production deployments, including the automatic deployments for `211dd8e` and `545eb3a`.
- `live-app-checks-actual.png`: the public app's cited answer, unsupported-question refusal, and blank-question validation feedback.
