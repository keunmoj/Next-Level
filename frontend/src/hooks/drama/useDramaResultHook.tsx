import DramaResultPost from "@/api/drama/DramaResultPost";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useDramaResultHook = () => {
  const navigate = useNavigate();
  const postDramaResult = async (id: any) => {
    const res = await DramaResultPost(id);
    if (res.data.status === 200) {
      navigate(-1);
    }
  };
  return { postDramaResult };
};
