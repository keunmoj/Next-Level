import DramaResultPost from "@/api/drama/DramaResultPost";
import usePlayerStore from "@/stores/youtube/usePlayerStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useDramaResultHook = () => {
  const isRecord = usePlayerStore((state: any) => state.isRecord);
  const navigate = useNavigate();
  const postDramaResult = async (id: any) => {
    if (isRecord) {
      const res = await DramaResultPost(id);
      if (res.data.status === 200) {
        navigate(-1);
      }
    } else {
      navigate(-1);
    }
  };
  return { postDramaResult };
};
