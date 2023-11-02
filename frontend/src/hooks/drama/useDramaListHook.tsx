import DramaListGet from "@/api/drama/DramaListGet";
import { useState } from "react";

export const useDramaListGetHook = () => {
  const [DramaList, setDramaList] = useState();
  const getDramaList = async () => {
    const res = await DramaListGet();
    // console.log(res.data.data);
    setDramaList(res.data.data);
  };
  return { DramaList, getDramaList };
};
