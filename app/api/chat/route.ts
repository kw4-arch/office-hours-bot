import { NextResponse } from "next/server";
import { answerQuestion } from "@/lib/chat";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = answerQuestion({
      studentName: typeof body.studentName === "string" ? body.studentName : "",
      question: typeof body.question === "string" ? body.question : "",
    });
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Invalid request." },
      { status: 400 },
    );
  }
}
