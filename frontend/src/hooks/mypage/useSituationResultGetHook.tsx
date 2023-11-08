import SituationResultGet from "@/api/mypage/SituationResultGet";

import { useState } from "react";

export const useSituationResultGetHook = () => {
  const [result, setResult] = useState<any>();
  const getSituationResult = async () => {
    const res = await SituationResultGet();
    setResult(res.data.data.histories);
  };
  return { result, getSituationResult };
};
