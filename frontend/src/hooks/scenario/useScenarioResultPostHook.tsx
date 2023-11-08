import ScenarioResultPost from "@/api/scenario/ScenarioResultPost";
import ScenarioTotalResultPost from "@/api/scenario/ScenarioTotalResultPost";
import useAiResultStore from "@/stores/airesult/useAiResultStore";
import { useEffect, useState } from "react";

export const useScenarioResultPostHook = () => {
  // 각 스크립트에 대한 점수 리스트
  const [evaScore, setEvaScore] = useState<any>();
  // 주스턴드
  const setTotalScoreList = useAiResultStore(
    (state: any) => state.setTotalScoreList
  );
  const totalScoreList = useAiResultStore((state: any) => state.totalScoreList);
  const totalScoreSum: number = totalScoreList.reduce(
    (total: number, num: number) => total + num,
    0
  );
  const totalAverage: number = totalScoreSum / totalScoreList.length;

  // 개별 점수
  const [eachScore, setEachScore] = useState<any>();

  const getScenarioResult = async (formData: any) => {
    console.log("전송중");
    const res = await ScenarioResultPost(formData);
    if (res?.data.data.score) {
      setEachScore(res?.data.data.score);
      setTotalScoreList(res?.data.data.score);
    } else {
      console.log("녹음안됨");
    }
  };

  useEffect(() => {
    console.log(totalScoreList);
    console.log(totalAverage);
  }, [totalScoreList]);

  // 전체 결과 전송
  const getScenarioTotalResult = async (
    situationId: any,
    totalScore: any,
    scripts: [],
    scores: []
  ) => {
    const res = await ScenarioTotalResultPost(
      situationId,
      totalScore,
      scripts,
      scores
    );
    console.log(res);
  };
  return {
    eachScore,
    // totalScoreList,
    getScenarioResult,
    getScenarioTotalResult,
  };
};
