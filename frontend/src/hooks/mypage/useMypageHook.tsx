import DramaResultGet from "@/api/mypage/DramaResultGet";
import SingResultGet from "@/api/mypage/SingResultGet";
import SituationResultGet from "@/api/mypage/SituationResultGet";

import { useEffect, useState } from "react";

export const useMypageHook = () => {
  const [dramaResult, setDramaResult] = useState<any>();
  const [singResult, setSingResult] = useState<any>();
  const [situationResult, setSituationResult] = useState<any>();
  const getDramaResult = async () => {
    const res = await DramaResultGet();
    setDramaResult(res.data.data.histories);
  };
  const getSingResult = async () => {
    const res = await SingResultGet();
    setSingResult(res.data.data.histories);
  };

  const getSituationResult = async () => {
    const res = await SituationResultGet();
    setSituationResult(res.data.data.histories);
  };

  useEffect(() => {
    getDramaResult();
    getSingResult();
    getSituationResult();
  });
  return { dramaResult, singResult, situationResult };
};
