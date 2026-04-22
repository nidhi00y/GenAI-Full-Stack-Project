import { GoogleGenAI } from "@google/genai";
import config from "dotenv/config";

const ai = new GoogleGenAI({
  GEMINI_API_KEY: config.GEMINI_API_KEY
});

async function GeminiAI() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

export default GeminiAI;