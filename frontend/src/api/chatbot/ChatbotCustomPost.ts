import { serverAxios } from "../api";

const ChatbotCustomPost = async (request: any) => {
  try {
    const response = await serverAxios({
      method: "post",
      url: "/chatgpt/custom",
      data: {
        request: request,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default ChatbotCustomPost;
