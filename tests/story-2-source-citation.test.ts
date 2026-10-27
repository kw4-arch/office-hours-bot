import { describe, expect, it } from "vitest";
import { answerQuestion } from "../lib/chat";

describe("Story 2: identify the course source", () => {
  it("a grounded answer identifies its source document and page", () => {
    const response = answerQuestion({
      studentName: "Demo Student",
      question: "How do tokens and embeddings differ?",
    });

    expect(response).toMatchObject({
      sources: [
        {
          document: "07 - How Large Language Models Work",
          page: 47,
        },
      ],
    });
  });
});
