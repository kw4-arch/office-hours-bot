# Part B browser checks

These checks were completed against the production build running locally on October 26, 2026. Repeat the same three checks on the Vercel URL after deployment and replace the final column if the result differs.

| What I tried | What the spec says should happen | What happened locally |
|---|---|---|
| Entered `Demo Student`, asked `How do tokens and embeddings differ?`, and clicked Ask. | Return a grounded answer and identify the relevant course document and page. | The bot explained tokens and embeddings and displayed `07 - How Large Language Models Work · p. 47`. |
| Asked `What is the dining hall menu tomorrow?` | State that the answer cannot be determined from the available course materials. | The bot said it could not determine the answer from the available course materials and showed no source. |
| Cleared the name and question, then clicked Ask. | Refuse an unauthenticated, blank submission. | The page displayed `Enter your name and a course question.` and sent no request. |
