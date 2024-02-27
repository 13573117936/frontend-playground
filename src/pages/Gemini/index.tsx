import { useEffect, useState } from "react";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import styles from "./index.module.less";
import { Button } from "antd";
const MODEL_NAME = "gemini-pro";
const API_KEY = "AIzaSyBHapB4komQgHmgeyTEzu9Jn7Qptj47T3M";

export default function Gemini() {
  const [text, setText] = useState("");
  const run = async () => {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const parts = [{ text: "Write a 1000 words story" }];

    const result = await model.generateContentStream({
      contents: [{ role: "user", parts }],
      generationConfig,
      safetySettings,
    });
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      console.log(chunkText);
      setText((v) => (v += chunkText));
    }
  };
  useEffect(() => {
    // run();
  }, []);

  return (
    <div className={styles.container}>
      <Button type="primary" onClick={run}>
        Run
      </Button>
      <div>{text}</div>
    </div>
  );
}
