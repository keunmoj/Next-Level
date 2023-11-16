import { serverAxios } from "../api";

const DramaListGet = async () => {
  try {
    const response = await serverAxios({
      method: "get",
      url: "/drama/all",
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default DramaListGet;
