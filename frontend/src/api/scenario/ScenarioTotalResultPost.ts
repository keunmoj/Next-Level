import { serverAxios } from "../api";

const ScenarioTotalResultPost = async (
  situationId: any,
  totalScore: any,
  scripts: any,
  scores: any
) => {
  try {
    const response = await serverAxios({
      method: "post",
      url: "/chatgpt/scenario/problem/result",
      data: {
        situationId,
        totalScore,
        scripts,
        scores,
      },
    });
    return response;
  } catch (error) {
    console.log("error", error);
  }
};

export default ScenarioTotalResultPost;
