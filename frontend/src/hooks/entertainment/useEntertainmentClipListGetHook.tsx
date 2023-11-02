import EntertainmentClipListGet from "@/api/entertainment/EntertainmentClipListGet";
import { useState } from "react";

export const useEntertainmentClipListGetHook = () => {
  const [clipList, setClipList] = useState<any>();
  const getEntertainmentClipList = async (id: any) => {
    const res = await EntertainmentClipListGet(id);
    setClipList(res.data.data.clips);
  };
  return { clipList, getEntertainmentClipList };
};
