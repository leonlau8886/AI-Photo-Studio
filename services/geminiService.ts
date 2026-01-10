import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const MODEL_NAME = 'gemini-2.5-flash-image';

export const generateStyledPhoto = async (
  sourceImages: string[], // Changed to accept array
  stylePrompt: string,
  aspectRatio: string = "3:4"
): Promise<string> => {
  try {
    const parts = [];

    // Add all images to the request parts
    sourceImages.forEach((imgBase64) => {
      const cleanBase64 = imgBase64.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, '');
      parts.push({
        inlineData: {
          mimeType: 'image/jpeg',
          data: cleanBase64,
        },
      });
    });

    // Adjust prompt based on number of images
    let textPrompt = '';
    if (sourceImages.length === 1) {
      textPrompt = `Create a new photo based on this person. ${stylePrompt}. Ensure the facial features resemble the original person but adapt the style, lighting, and background perfectly. High resolution, photorealistic.`;
    } else {
      textPrompt = `Create a wedding/couple photo based on these two people. The first image is the groom/man, the second image is the bride/woman. ${stylePrompt}. Ensure the facial features of both individuals resemble the source images respectively, but adapt the style, clothing, and background to match the description. High resolution, photorealistic, professional wedding photography.`;
    }

    parts.push({ text: textPrompt });

    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: { parts },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio, 
        }
      }
    });

    // Extract image from response
    if (response.candidates && response.candidates.length > 0) {
      const contentParts = response.candidates[0].content.parts;
      for (const part of contentParts) {
        if (part.inlineData && part.inlineData.data) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }

    throw new Error("No image generated in the response.");
  } catch (error) {
    console.error("Gemini Generation Error:", error);
    throw error;
  }
};

export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};