import { serverAxios } from "../api";

const EntertainmentResultPost = async (id: any) => {
  try {
    const response = await serverAxios({
      method: "post",
      url: `/show/problem/result`,
      data: {
        showProblemId: id,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default EntertainmentResultPost;
