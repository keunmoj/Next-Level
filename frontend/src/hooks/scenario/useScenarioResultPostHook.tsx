import ScenarioResultPost from "@/api/scenario/ScenarioResultPost";
import ScenarioTotalResultPost from "@/api/scenario/ScenarioTotalResultPost";
import useAiResultStore from "@/stores/airesult/useAiResultStore";
import { useEffect, useState } from "react";

export const useScenarioResultPostHook = () => {
  // 각 스크립트에 대한 점수 리스트
  const [evaScore, setEvaScore] = useState<any>();
  // 주스턴드 2-1 저장
  const setTotalScoreList = useAiResultStore(
    (state: any) => state.setTotalScoreList
  );
  const setTotalSCriptList = useAiResultStore(
    (state: any) => state.setTotalSCriptList
  );

  // 개별 점수
  const [eachScore, setEachScore] = useState<any>();

  const getScenarioResult = async (formData: any) => {
    console.log("전송중");
    const res = await ScenarioResultPost(formData);
    if (res?.data.data.score) {
      setEachScore(res?.data.data.score);
      setTotalScoreList(res?.data.data.score);
      setTotalSCriptList(res?.data.data.script);
    } else {
      console.log("녹음안됨");
    }
  };

  return {
    eachScore,
    getScenarioResult,
  };
};
