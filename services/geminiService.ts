import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../constants';

const apiKey = process.env.API_KEY || '';

class GeminiService {
  private ai: GoogleGenAI | null = null;
  private chat: Chat | null = null;

  constructor() {
    if (apiKey) {
      this.ai = new GoogleGenAI({ apiKey });
    } else {
      console.warn("API_KEY is missing. AI features will not work.");
    }
  }

  public initChat(): void {
    if (!this.ai) return;

    this.chat = this.ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }

  public async sendMessageStream(message: string): Promise<AsyncIterable<string> | null> {
    if (!this.chat) {
        this.initChat();
    }
    
    if (!this.chat) {
        return null;
    }

    try {
      const responseStream = await this.chat.sendMessageStream({ message });
      
      // Return an async iterable that maps the response chunk to text
      return {
        [Symbol.asyncIterator]: async function* () {
          for await (const chunk of responseStream) {
            const c = chunk as GenerateContentResponse;
            if (c.text) {
              yield c.text;
            }
          }
        }
      };
    } catch (error) {
      console.error("Error sending message to Gemini:", error);
      throw error;
    }
  }
}

export const geminiService = new GeminiService();
