import { serverAxios } from "../api";

const DramaResultPost = async (id: any) => {
  try {
    const response = await serverAxios({
      method: "post",
      url: `/drama/problem/result`,
      data: {
        dramaProblemId: id,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default DramaResultPost;
