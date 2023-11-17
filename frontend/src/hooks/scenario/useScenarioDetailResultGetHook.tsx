import AiResultDetailGet from "@/api/airesult/AiResultDetail";
import { useState } from "react";

export const useScenarioDetailResultGetHook = () => {
  const [aiResults, setAiResults] = useState<any>();
  const [aiResultScore, setAiResultScore] = useState<number>();
  const getAiResultDetail = async (situationProblemId: any) => {
    const res = await AiResultDetailGet(situationProblemId);
    setAiResults(res.data.data.results);
    setAiResultScore(res.data.data.totalScore);
  };

  return { getAiResultDetail, aiResults, aiResultScore };
};
