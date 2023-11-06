import { serverAxios } from "../api";

const RankingGet = async (userId: any) => {
  try {
    const response = await serverAxios({
      method: "get",
      url: `/ranking/all/${userId}`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default RankingGet;
