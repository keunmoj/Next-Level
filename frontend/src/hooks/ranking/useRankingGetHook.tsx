import RankingGet from "@/api/ranking/RankingGet";
import { useEffect, useState } from "react";

export const useRankingGetHook = () => {
  const [ranking, setranking] = useState<any>();
  const getRanking = async () => {
    const res = await RankingGet();
    setranking(res.data.data);
    console.log(res.data.data);
  };

  const user = ranking?.rankedUsers;
  const [newRanking, setNewRanking] = useState<any>([]);
  useEffect(() => {
    getRanking();
  }, []);

  useEffect(() => {
    if (user) {
      const newRankingCopy = [...user];
      const temp = newRankingCopy[0];
      newRankingCopy[0] = newRankingCopy[1];
      newRankingCopy[1] = temp;
      setNewRanking(newRankingCopy);
    }
  }, [user]);
  return { ranking, newRanking };
};
