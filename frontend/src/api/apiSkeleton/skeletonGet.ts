import { serverAxios } from "../api";

const skeletonGet = async () => {
  try {
    const response = await serverAxios({
      method: "get",
      url: `/skeletonUrl`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default skeletonGet;
