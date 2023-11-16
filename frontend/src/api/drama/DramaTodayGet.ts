import { serverAxios } from "../api";

const DramaTodayGet = async () => {
  try {
    const response = await serverAxios({
      method: "get",
      url: `/drama/recent/`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default DramaTodayGet;
