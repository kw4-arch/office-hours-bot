# Part B browser checks

These checks were completed in a browser against https://office-hours-bot-eight.vercel.app/ on October 26, 2026, after Vercel reported "Deployed to Production." They verify the public deployment of commit `a82f974`, not a localhost session. Codex performed these Part B checks; the student still needs to perform the separate Part D attempts against a classmate's app.

| What I tried | What the spec says should happen | What happened on the live URL |
|---|---|---|
| Entered `Demo Student`, asked `How do tokens and embeddings differ?`, and clicked Ask. | Return a grounded answer and identify the relevant course document and page. | The bot explained tokens and embeddings and displayed `07 - How Large Language Models Work · p. 47`. |
| Asked `What is the dining hall menu tomorrow?` | State that the answer cannot be determined from the available course materials. | The bot said it could not determine the answer from the available course materials and showed no source. |
| Left `Demo Student` entered, left the question blank after the previous answer, then clicked Ask. | Refuse an empty question. | The page displayed `Enter your name and a course question.` and added no answer. |
