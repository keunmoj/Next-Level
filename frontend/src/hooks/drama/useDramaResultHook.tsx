import DramaResultPost from "@/api/drama/DramaResultPost";
import { useState } from "react";

export const useDramaResultHook = () => {
  const postDramaResult = async () => {
    const res = await DramaResultPost();
    console.log(res);
  };
  return { postDramaResult };
};
