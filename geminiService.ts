
import { GoogleGenAI, Type } from "@google/genai";
import { LessonPlan } from "./types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateLessonPlan = async (
  grade: string, 
  topic: string, 
  subUnit: string,
  lessonNumber: number,
  totalPeriods: number
): Promise<LessonPlan> => {
  const prompt = `
    You are an expert Sri Lankan Mathematics Teacher (தரம் 6-11).
    Task: Create a highly detailed 40-minute lesson plan for a single period (பாடவேளை).

    Context:
    - Grade: தரம் ${grade}
    - Main Unit: "${topic}"
    - Sub-unit: "${subUnit}" (உப அலகு)
    - Period Number: ${lessonNumber} of ${totalPeriods} (பாடவேளை ${lessonNumber} / ${totalPeriods})

    Pedagogical Guidelines:
    - Content Scope: Strictly adhere to the scope of this SPECIFIC sub-unit as defined in Sri Lankan textbooks.
    - Focus: Ensure the difficulty level and examples match the specified Grade ${grade}.
    - Language: Strictly Tamil (தமிழ்).
    - Terminology: Use ONLY terms from Sri Lankan Edupub/NIE books.

    Structure Requirements (40 Mins):
    - 5 Mins: Introduction (முன்னுரை/அறிமுகம்) - Engaging start or recap.
    - 15 Mins: Presentation (முன்னளிப்பு) - Core concept delivery with blackboard examples.
    - 10 Mins: Practice (பயிற்சி) - Guided student work on textbook exercises.
    - 7 Mins: Production (வெளியீடு) - Independent problem solving to check mastery.
    - 3 Mins: Conclusion (முடிவுரை) - Summary and wrap-up.

    Return the response in valid JSON format matching the schema.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          grade: { type: Type.STRING },
          topic: { type: Type.STRING },
          subUnit: { type: Type.STRING },
          time: { type: Type.STRING },
          model: { type: Type.STRING },
          objectives: { type: Type.ARRAY, items: { type: Type.STRING } },
          introduction: {
            type: Type.OBJECT,
            properties: { duration: { type: Type.STRING }, content: { type: Type.STRING } }
          },
          presentation: {
            type: Type.OBJECT,
            properties: { duration: { type: Type.STRING }, content: { type: Type.STRING }, textbookRef: { type: Type.STRING } }
          },
          practice: {
            type: Type.OBJECT,
            properties: { 
              duration: { type: Type.STRING }, 
              content: { type: Type.STRING }, 
              exercises: { type: Type.ARRAY, items: { type: Type.STRING } } 
            }
          },
          production: {
            type: Type.OBJECT,
            properties: { duration: { type: Type.STRING }, content: { type: Type.STRING } }
          },
          conclusion: {
            type: Type.OBJECT,
            properties: { duration: { type: Type.STRING }, content: { type: Type.STRING } }
          }
        },
        required: ["grade", "topic", "subUnit", "time", "model", "objectives", "introduction", "presentation", "practice", "production", "conclusion"]
      }
    }
  });

  return JSON.parse(response.text || "{}") as LessonPlan;
};
