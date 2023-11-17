import { serverAxios } from "../api";

const SingPopularListGet = async () => {
  try {
    const response = await serverAxios({
      method: "get",
      url: "/song/all",
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default SingPopularListGet;
