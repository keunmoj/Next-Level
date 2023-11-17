import { serverAxios } from "../api";

const SingGameScorePost = async (request: any) => {
  try {
    const response = await serverAxios({
      method: "post",
      url: "/song/problem/result",
      data: request,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default SingGameScorePost;
