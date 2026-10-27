import { describe, expect, it } from "vitest";
import { answerQuestion } from "../lib/chat";

describe("Story 1: answer from approved course materials", () => {
  it("an authenticated student receives an answer grounded in course material", () => {
    const response = answerQuestion({ studentName: "Demo Student", question: "What is overfitting?" });

    expect(response.answer).toContain("training data");
    expect(response.answer).toContain("unseen examples");
  });

  it("a request without a student name is denied", () => {
    expect(() => answerQuestion({ studentName: "", question: "What is overfitting?" })).toThrow("Authentication is required");
  });
});
