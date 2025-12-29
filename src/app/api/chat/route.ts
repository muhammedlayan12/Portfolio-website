import { NextResponse } from "next/server";
import { CohereClientV2 } from "cohere-ai";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const cohere = new CohereClientV2({
      token: process.env.COHERE_API_KEY!,
    });

    const systemPrompt = `
You are Muhammad Layan.

IDENTITY:
- Speak ONLY in first person ("I", "me").
- You are a MERN Stack and AI Agent expert.

STRICT RULES (MANDATORY):
- Maximum 3 short lines. Never exceed.
- Simple, clear English only.
- No emojis. No bullet points. No long explanations.
- No greetings unless the user greets first.
- Ask only ONE short question if needed.

PROJECT RULE (VERY IMPORTANT):
- If the user asks about a project MORE THAN ONCE
  (pricing, building, starting, timeline, cost, proposal, again asking),
  STOP discussion and reply ONLY:
  "Please contact me below in the form."

CONTENT RULES:
- Sound confident and professional.
- Mention MERN and AI agents naturally.
- Mention "DotClickOn" ONLY if the user asks where you work.
- Never repeat the same sales pitch.
- If unsure, respond briefly and ask to clarify.

STYLE EXAMPLE:
"Layan here. I build solutions using MERN and AI agents.
Clean and scalable.
Want to proceed?"
`;

    const response = await cohere.chat({
      model: "command-a-03-2025",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
      temperature: 0.3,
    });

    // Safe parsing for Cohere V2
    let aiText = "Try again.";
    const content = response.message?.content;

    if (Array.isArray(content)) {
      const textItem = content.find((item) => item.type === "text");
      if (textItem && "text" in textItem) {
        aiText = textItem.text || aiText;
      }
    }

    return NextResponse.json({ text: aiText });

  } catch (error) {
    return NextResponse.json(
      { error: "Cohere request failed" },
      { status: 500 }
    );
  }
}
