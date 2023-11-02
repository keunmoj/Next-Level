import ChatbotCustomPost from "@/api/chatbot/ChatbotCustomPost";

export const useChatbotHook = () => {
  const getChatbot = async (request: any) => {
    const res = await ChatbotCustomPost(request);
    console.log(res);
  };
  return { getChatbot };
};
