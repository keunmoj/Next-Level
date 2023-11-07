import { serverAxios } from "../api";

const DramaResultPost = async (id: any) => {
  try {
    const response = await serverAxios({
      method: "post",
      url: `/drama/problem/result`,
      data: {
        dramaProblemId: id,
      },
      headers: {
        "Content-Type": "application/json",
        "X-Authorization-Id": 4,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default DramaResultPost;
