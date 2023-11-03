import { serverAxios } from "../api";

const ChatbotTalkingPost = async (request: any) => {
  try {
    const response = await serverAxios({
      method: "post",
      url: "/chatgpt/custom/talking",
      data: {
        request: request,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default ChatbotTalkingPost;
