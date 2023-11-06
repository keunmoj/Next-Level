import DramaListGet from "@/api/drama/DramaListGet";
import { useState } from "react";

export const useDramaListGetHook = () => {
  const [DramaList, setDramaList] = useState<any>();
  const getDramaList = async () => {
    const res = await DramaListGet();
    setDramaList(res.data.data.dramas);
  };
  return { DramaList, getDramaList };
};
