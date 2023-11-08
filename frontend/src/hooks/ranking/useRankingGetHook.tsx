import RankingGet from "@/api/ranking/RankingGet";
import { useState } from "react";

export const useRankingGetHook = () => {
  const [ranking, setranking] = useState<any>();
  const getRanking = async () => {
    const res = await RankingGet();
    setranking(res.data.data);
  };
  return { ranking, getRanking };
};
