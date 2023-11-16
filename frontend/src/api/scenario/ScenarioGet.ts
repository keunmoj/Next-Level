import { serverAxios } from "../api";

const ScenarioGet = async (scenarioId: any) => {
  try {
    const response = await serverAxios({
      method: "get",
      url: `/chatgpt/scenario/problem/${scenarioId}`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default ScenarioGet;
