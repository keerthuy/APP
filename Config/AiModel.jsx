const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.EXPO_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const GenerateTopicsAIModel = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "learn Python : as your are coaching teacher\n-User wants to learn about topic\n-Generate 5-7 Course title for study(short)\n-Make sure it is releated to description\n-Output will be Array of String in JSON FORMAT only\n-Do not add any plain text in output"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"course_titles\": [\n    \"Python Basics: Syntax & Data Types\",\n    \"Control Flow: Logic and Loops in Python\",\n    \"Functions & Modules: Code Reusability\",\n    \"Data Structures: Lists, Dictionaries, & More\",\n    \"Object-Oriented Programming (OOP) in Python\",\n    \"File I/O: Reading & Writing Data\",\n    \"Error Handling: Debugging Your Code\"\n  ]\n}\n```"},
          ],
        },
      ],
    });

    export const GenerateCourseAIModel = model.startChat({
      generationConfig,
      history: [
        
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
  
  
  