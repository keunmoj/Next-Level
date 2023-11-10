import DramaTodayGet from "@/api/drama/DramaTodayGet";
import { useState } from "react";

export const useDramaTodayHook = () => {
  const getDramaToday = async () => {
    const res = await DramaTodayGet();
    console.log(res);
  };

  return { getDramaToday };
};
