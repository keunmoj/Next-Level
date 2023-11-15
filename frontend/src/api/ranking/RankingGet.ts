import { serverAxios } from "../api";

const RankingGet = async () => {
  try {
    const response = await serverAxios({
      method: "get",
      url: `/auth/user/ranking`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default RankingGet;
