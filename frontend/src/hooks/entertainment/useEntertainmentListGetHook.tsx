import EntertainmentListGet from "@/api/entertainment/EntertainmentListGet";
import { useState } from "react";

export const useEntertainmentListGetHook = () => {
  const [entertainmentList, setEntertainmentList] = useState();
  const getEntertainmentList = async () => {
    const res = await EntertainmentListGet();
    setEntertainmentList(res.data.entireShowList);
  };
  return { entertainmentList, getEntertainmentList };
};
