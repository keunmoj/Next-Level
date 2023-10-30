import { serverAxios } from "../api";

const SingListGet = async () => {
  try {
    const response = await serverAxios({
      method: "get",
      url: "/song",
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default SingListGet;
