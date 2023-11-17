import { serverAxios } from "../api";

const DramaResultGet = async () => {
  try {
    const response = await serverAxios({
      method: "get",
      url: "/auth/history",
      params: { problemTypes: "drama,show", orderType: "latest" },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default DramaResultGet;
