import { serverAxios } from "../api";

const SituationResultGet = async () => {
  try {
    const response = await serverAxios({
      method: "get",
      url: "/auth/history",
      params: { problemTypes: "situation", orderType: "latest" },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default SituationResultGet;
