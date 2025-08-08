// src/app/api/chat/route.ts
import { GoogleGenerativeAI } from '@google/generative-ai';
import { getPortfolioContext } from '@/lib/portfolio-content';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { message } = await req.json();

  const portfolioContext = getPortfolioContext();
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return new Response('API key is missing', { status: 500 });
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const prompt = `
    You are Nikhil Chauhan's personal AI assistant for his portfolio website. 
    Your name is "Nickon India AI". Your goal is to answer questions from potential recruiters 
    and clients based *only* on the context provided below. Be friendly, professional, and concise. 
    If a question is outside the scope of the provided context, politely state that you can only 
    answer questions about Nikhil's skills and experience.

    Context about Nikhil Chauhan:
    ---
    ${portfolioContext}
    ---

    User's question: "${message}"
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    
    return new Response(text, {
      headers: { 'Content-Type': 'text/plain' },
    });

  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return new Response('Error processing your request.', { status: 500 });
  }
}
