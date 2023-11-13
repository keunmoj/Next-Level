import ChatbotCustomPost from "@/api/chatbot/ChatbotCustomPost";
import { useState } from "react";

export const useChatbotHook = () => {
  const [firstQuestion, setFirstQuestion] = useState();

  const getChatbot = async (subject: any) => {
    const res = await ChatbotCustomPost(subject);
    console.log(res);
    setFirstQuestion(res.data.data.response);
  };
  return { firstQuestion, getChatbot };
};
