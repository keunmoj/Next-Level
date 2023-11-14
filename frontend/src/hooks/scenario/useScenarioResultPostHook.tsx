import ScenarioResultPost from "@/api/scenario/ScenarioResultPost";
import ScenarioTotalResultPost from "@/api/scenario/ScenarioTotalResultPost";
import useAiResultStore from "@/stores/airesult/useAiResultStore";
import { useEffect, useState } from "react";

export const useScenarioResultPostHook = (props: any) => {
  // 각 스크립트에 대한 점수 리스트
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
    const res = await ScenarioResultPost(formData);
    if (res?.data.data.score) {
      setEachScore(res?.data.data.score);
      setTotalScoreList(res?.data.data.score);
      setTotalSCriptList(props);
    } else {
      console.log("녹음안됨");
      setTotalSCriptList(props);
      setEachScore(0);
      setTotalScoreList(0);
    }
  };

  return {
    eachScore,
    getScenarioResult,
  };
};
