import { courseChunks } from "./course-content";

export type ChatRequest = {
  studentName: string;
  question: string;
};

export type ChatResponse = {
  answer: string;
  sources: Array<{
    document: string;
    page: number;
  }>;
};

const STOP_WORDS = new Set(["a", "an", "and", "are", "do", "does", "how", "i", "in", "is", "of", "the", "to", "what"]);

function terms(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((term) => term.length > 1 && !STOP_WORDS.has(term));
}

export function answerQuestion({ studentName, question }: ChatRequest): ChatResponse {
  if (!studentName.trim()) throw new Error("Authentication is required.");
  if (studentName.trim().length > 80) throw new Error("Name must be 80 characters or fewer.");
  if (!question.trim()) throw new Error("A question is required.");
  if (question.length > 500) throw new Error("Question must be 500 characters or fewer.");

  const questionTerms = terms(question);
  const ranked = courseChunks
    .map((chunk) => ({
      chunk,
      score: questionTerms.reduce((score, term) => {
        if (chunk.keywords.includes(term)) return score + 3;
        if (chunk.content.toLowerCase().includes(term)) return score + 1;
        return score;
      }, 0),
    }))
    .sort((a, b) => b.score - a.score);

  if (!ranked[0] || ranked[0].score < 2) {
    return {
      answer: "I can’t determine that from the available course materials. Try asking about a concept covered in the indexed lectures.",
      sources: [],
    };
  }

  return {
    answer: ranked[0].chunk.content,
    sources: [
      {
        document: ranked[0].chunk.title,
        page: ranked[0].chunk.page,
      },
    ],
  };
}
