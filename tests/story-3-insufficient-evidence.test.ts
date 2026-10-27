import { describe, expect, it } from "vitest";
import { answerQuestion } from "../lib/chat";

describe("Story 3: refuse unsupported answers", () => {
  it("the bot says the answer cannot be determined when course evidence is missing", () => {
    const response = answerQuestion({
      studentName: "Demo Student",
      question: "What is the dining hall menu tomorrow?",
    });

    expect(response.answer).toContain("can’t determine that from the available course materials");
    expect(response.sources).toEqual([]);
  });
});
