import { describe, expect, it } from "vitest";
import { answerQuestion } from "../lib/chat";

describe("SEC-6: enforce input limits on the server", () => {
  it("the server rejects a question longer than 500 characters", () => {
    expect(() =>
      answerQuestion({
        studentName: "Demo Student",
        question: "a".repeat(501),
      }),
    ).toThrow("Question must be 500 characters or fewer.");
  });
});
