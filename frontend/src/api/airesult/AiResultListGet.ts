import { serverAxios } from "../api";

const AiResultListGet = async () => {
  try {
    const response = await serverAxios({
      method: "get",
      url: "history?problemTypes=situation&orderType={latest, highest, lowest}",
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default AiResultListGet;
