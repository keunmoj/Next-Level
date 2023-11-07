import { serverAxios } from "../api";

const DramaResultPost = async () => {
  try {
    const response = await serverAxios({
      method: "post",
      url: "/drama/problem/result",
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default DramaResultPost;
