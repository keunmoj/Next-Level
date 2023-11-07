import DramaResultPost from "@/api/drama/DramaResultPost";
import EntertainmentResultPost from "@/api/entertainment/EntertainmentResultPost";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useEntertainmentResultHook = () => {
  const navigate = useNavigate();
  const postEntertainmentResult = async (id: any) => {
    const res = await EntertainmentResultPost(id);
    if (res.data.status === 200) {
      navigate(-1);
    }
  };
  return { postEntertainmentResult };
};
