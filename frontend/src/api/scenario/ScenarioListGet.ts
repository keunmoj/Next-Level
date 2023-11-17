import { serverAxios } from "../api";

const ScenarioListGet = async () => {
  try {
    const response = await serverAxios({
      method: "get",
      url: "/chatgpt/scenario/all",
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default ScenarioListGet;
