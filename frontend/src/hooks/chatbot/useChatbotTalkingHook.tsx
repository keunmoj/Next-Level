import ChatbotTalkingPost from "@/api/chatbot/ChatbotTalkingPost";
import { useState } from "react";

export const useChatbotTalkingHook = () => {
  const [nextQuestion, setNextQuestion] = useState();

  const getChatTalkingbot = async (subject: any, request: any) => {
    const res = await ChatbotTalkingPost(subject, request);
    setNextQuestion(res.data.data.response);
  };
  return { nextQuestion, getChatTalkingbot };
};
