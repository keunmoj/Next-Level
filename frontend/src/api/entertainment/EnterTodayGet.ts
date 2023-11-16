import { serverAxios } from "../api";

const EnterTodayGet = async () => {
  try {
    const response = await serverAxios({
      method: "get",
      url: `/show/recent/`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default EnterTodayGet;
