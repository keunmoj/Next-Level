import ChatbotCustomPost from "@/api/chatbot/ChatbotCustomPost";
import { useState } from "react";

export const useChatbotHook = () => {
  const [firstQuestion, setFirstQuestion] = useState();

  const getChatbot = async (request: any) => {
    const res = await ChatbotCustomPost(request);
    setFirstQuestion(res.data.data.response);
    // console.log(res.data.data.response);
  };
  return { firstQuestion, getChatbot };
};
