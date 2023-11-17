import { serverAxios } from "../api";

const ChatbotTalkingPost = async (subject: any, request: any) => {
  try {
    const response = await serverAxios({
      method: "post",
      url: "/chatgpt/custom/talking",
      data: {
        subject,
        request,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default ChatbotTalkingPost;
