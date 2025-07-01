import { GoogleGenerativeAI } from "@google/generative-ai";

const ApiKey = "AIzaSyBH__y0pJH24wXBhgj4gE7RGSB-9cRvtSE"; // ❗Consider moving this to .env for security

const ai = new GoogleGenerativeAI(ApiKey);

export const GenerateInformation = async (topic: string = "acne and eczema") => {
  const prompt = `
Imagine yourself as a Medical Teacher and help me assist in learning different skin diseases. I want you to give me details of a disease which I will mention in the topic. Generate response in the below format:

{
  "diseaseName": [Name of the possible disease according to the symptoms],
  "Symptoms": [Symptoms of the disease],
  "precautions": [3 - 5 step precautions],
  "foodSuggestions": [2 - 3 food suggestions]
}

Topic: ${topic}

Only give output in the specified JSON format. No extra information.
`;

  const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);
  const response = await result.response.text();

  return response;
};
