import { serverAxios } from "../api";

const AiResultDetailGet = async (situationProblemId: number) => {
  try {
    const response = await serverAxios({
      method: "get",
      url: `/chatgpt/scenario/result/${situationProblemId}`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default AiResultDetailGet;
