import DramaTodayGet from "@/api/drama/DramaTodayGet";
import { useState } from "react";

export const useDramaTodayHook = () => {
  const [todayDramaTitle, setTodayDramaTitle] = useState<string>();
  const [todayDramaClips, setTodayDramaClips] = useState([]);
  const getDramaToday = async () => {
    const res = await DramaTodayGet();
    setTodayDramaTitle(res.data.data.title);
    setTodayDramaClips(res.data.data.problems);
  };

  return { todayDramaTitle, todayDramaClips, getDramaToday };
};
