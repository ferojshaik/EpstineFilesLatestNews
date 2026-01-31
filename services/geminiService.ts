
import { GoogleGenAI, Type } from "@google/genai";
import { NewsItem } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function fetchLatestEpsteinNews(): Promise<NewsItem[]> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Search for the most recent news updates regarding the Jeffrey Epstein case files, recent court unsealings, and investigative developments. Return the top 4 news stories as a structured JSON list.",
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              summary: { type: Type.STRING },
              url: { type: Type.STRING },
              source: { type: Type.STRING },
              date: { type: Type.STRING }
            },
            required: ["title", "summary", "url", "source", "date"]
          }
        }
      },
    });

    const text = response.text;
    if (text) {
      return JSON.parse(text);
    }
    return [];
  } catch (error) {
    console.error("Error fetching news from Gemini:", error);
    return [];
  }
}
