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
    console.log("전송중");
    const res = await ScenarioResultPost(formData);
    console.log(res);
    // console.log(props);
    if (res?.data.data.score) {
      setEachScore(res?.data.data.score);
      setTotalScoreList(res?.data.data.score);
      setTotalSCriptList(props);
      // console.log(props);
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
