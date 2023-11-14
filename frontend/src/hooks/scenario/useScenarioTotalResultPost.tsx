import ScenarioTotalResultPost from "@/api/scenario/ScenarioTotalResultPost";
import { useState } from "react";

export const useScenarioTotalResultPostHook = () => {
  const [userScenarioNum, setUserScenarioNum] = useState<any>();

  const getScenarioTotalResult = async (
    situationId: number,
    totalScore: number,
    scriptNumbers: [],
    scores: []
  ) => {
    const res = await ScenarioTotalResultPost(
      situationId,
      totalScore,
      scriptNumbers,
      scores
    );
    setUserScenarioNum(res?.data.data);
  };
  return { userScenarioNum, getScenarioTotalResult };
};
