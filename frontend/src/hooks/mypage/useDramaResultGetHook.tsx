import DramaResultGet from "@/api/mypage/DramaResultGet";

import { useState } from "react";

export const useDramaResultGetHook = () => {
  const [result, setResult] = useState<any>();
  const getDramaResult = async () => {
    const res = await DramaResultGet();
    setResult(res.data.data.histories);
  };
  return { result, getDramaResult };
};
