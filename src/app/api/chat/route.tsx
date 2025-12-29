// app/api/chat/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ text: "Key Missing" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    
    // TRY THIS: Use "gemini-pro" as a fallback if 1.5-flash still shows 404
    // or use "gemini-1.5-flash-latest"
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });

  } catch (error: any) {
    console.error("DEBUG LOG:", error.message);
    
    // If it's still failing, it's the VPN.
    if (error.message.includes("404") || error.message.includes("location")) {
       return NextResponse.json({ 
         text: "Google is still blocking your Terminal IP. Please ensure your System VPN (not browser extension) is set to USA/Germany and RESTART VS Code." 
       }, { status: 500 });
    }
    
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}