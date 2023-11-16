import SingResultGet from "@/api/mypage/SingResultGet";

import { useState } from "react";

export const useSingResultGetHook = () => {
  const [result, setResult] = useState<any>();
  const getSingResult = async () => {
    const res = await SingResultGet();
    setResult(res.data.data.histories);
  };
  return { result, getSingResult };
};
