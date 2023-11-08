import { serverAxios } from "../api";

const SingResultGet = async () => {
  try {
    const response = await serverAxios({
      method: "get",
      url: "/auth/history",
      params: { problemTypes: "song", orderType: "latest" },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default SingResultGet;
