import ChatbotTalkingPost from "@/api/chatbot/ChatbotTalkingPost";
import { useState } from "react";

export const useChatbotTalkingHook = () => {
  const [nextQuestion, setNextQuestion] = useState();
  const getChatTalkingbot = async (request: any) => {
    const res = await ChatbotTalkingPost(request);
    setNextQuestion(res.data.data.message);
  };
  return { nextQuestion, getChatTalkingbot };
};
