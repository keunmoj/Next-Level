import EntertainmentListGet from "@/api/entertainment/EntertainmentListGet";
import { useState } from "react";

export const useEntertainmentListGetHook = () => {
  const [entertainmentList, setEntertainmentList] = useState<any>();
  const getEntertainmentList = async () => {
    const res = await EntertainmentListGet();
    setEntertainmentList(res.data.data.shows);
  };
  return { entertainmentList, getEntertainmentList };
};
