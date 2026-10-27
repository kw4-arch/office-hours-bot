"use client";

import { FormEvent, useState } from "react";

type Message = {
  role: "student" | "bot";
  text: string;
  sources?: Array<{ document: string; page: number }>;
};

const suggestions = [
  "What is overfitting?",
  "How do tokens and embeddings differ?",
  "What are the five tribes of machine learning?",
];

export default function Home() {
  const [studentName, setStudentName] = useState("");
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function ask(event: FormEvent) {
    event.preventDefault();
    setError("");
    if (!studentName.trim() || !question.trim()) {
      setError("Enter your name and a course question.");
      return;
    }

    const submittedQuestion = question.trim();
    setMessages((current) => [...current, { role: "student", text: submittedQuestion }]);
    setQuestion("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentName, question: submittedQuestion }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error ?? "The bot could not answer right now.");
      setMessages((current) => [
        ...current,
        { role: "bot", text: payload.answer, sources: payload.sources },
      ]);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "The bot could not answer right now.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Office Hours Bot home">
          <span className="brandMark">OH</span>
          <span>Office Hours Bot</span>
        </a>
        <span className="coursePill">70-445 · Fall 2026</span>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span /> Course-grounded answers</div>
        <h1>Office hours,<br /><em>whenever you need them.</em></h1>
        <p className="dek">
          Ask about concepts from the approved course materials. This demo retrieves from a curated
          course index and stays honest when the answer is not there.
        </p>
      </section>

      <section className="workspace" aria-label="Ask the Office Hours Bot">
        <aside>
          <p className="step">01 · IDENTIFY</p>
          <label htmlFor="studentName">Your name</label>
          <input
            id="studentName"
            value={studentName}
            onChange={(event) => setStudentName(event.target.value)}
            placeholder="e.g. Andrew"
            maxLength={80}
          />
          <p className="finePrint">A typed name simulates course authentication for this prototype.</p>

          <p className="step second">02 · TRY A PROMPT</p>
          <div className="suggestions">
            {suggestions.map((suggestion) => (
              <button key={suggestion} type="button" onClick={() => setQuestion(suggestion)}>
                {suggestion}<span>↗</span>
              </button>
            ))}
          </div>
        </aside>

        <div className="chatPanel">
          <div className="chatHeader">
            <div><span className="statusDot" /> Knowledge base online</div>
            <span>8 course topics indexed</span>
          </div>

          <div className="messages" aria-live="polite">
            {messages.length === 0 ? (
              <div className="emptyState">
                <div className="orbit"><span>?</span></div>
                <h2>What are you working through?</h2>
                <p>Ask a focused question. I’ll look only in the approved course index.</p>
              </div>
            ) : (
              messages.map((message, index) => (
                <article className={`message ${message.role}`} key={`${message.role}-${index}`}>
                  <p className="messageRole">{message.role === "student" ? studentName : "Office Hours Bot"}</p>
                  <p>{message.text}</p>
                  {message.sources && message.sources.length > 0 && (
                    <div className="sourceBlock">
                      <span>Source</span>
                      {message.sources.map((source) => (
                        <p key={`${source.document}-${source.page}`}>
                          {source.document} · p. {source.page}
                        </p>
                      ))}
                    </div>
                  )}
                </article>
              ))
            )}
            {loading && <div className="thinking">Searching the course materials…</div>}
          </div>

          <form onSubmit={ask}>
            <textarea
              aria-label="Course question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask a question about the course…"
              rows={2}
              maxLength={500}
            />
            <button className="askButton" type="submit" disabled={loading}>Ask <span>→</span></button>
          </form>
          {error && <p className="error" role="alert">{error}</p>}
          <p className="disclaimer">Prototype answers may be incomplete. Verify important details in the original materials.</p>
        </div>
      </section>
    </main>
  );
}
