import DramaResultPost from "@/api/drama/DramaResultPost";
import { useState } from "react";

export const useDramaResultHook = () => {
  const postDramaResult = async (id: any) => {
    const res = await DramaResultPost(id);
  };
  return { postDramaResult };
};
