import DramaClipListGet from "@/api/drama/DramaClipListGet";
import { useState } from "react";

export const useDramaClipListHook = () => {
  const [clipList, setClipList] = useState<any>();
  const getDramaClipList = async (id: any) => {
    const res = await DramaClipListGet(id);
    setClipList(res.data.data.problems);
  };
  return { clipList, getDramaClipList };
};
