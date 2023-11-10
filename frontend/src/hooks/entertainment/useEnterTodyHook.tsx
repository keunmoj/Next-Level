import EnterTodayGet from "@/api/entertainment/EnterTodayGet";
import { useState } from "react";

export const useEnterTodayHook = () => {
  const [todayEnterTitle, setTodayEnterTitle] = useState<string>();
  const [todayEnterClips, setTodayEnterClips] = useState([]);
  const getEnterToday = async () => {
    const res = await EnterTodayGet();
    setTodayEnterTitle(res.data.data.title);
    setTodayEnterClips(res.data.data.problems);
    // console.log(res);
  };

  return { todayEnterTitle, todayEnterClips, getEnterToday };
};
