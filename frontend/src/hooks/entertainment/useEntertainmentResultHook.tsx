import DramaResultPost from "@/api/drama/DramaResultPost";
import EntertainmentResultPost from "@/api/entertainment/EntertainmentResultPost";
import usePlayerStore from "@/stores/youtube/usePlayerStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useEntertainmentResultHook = () => {
  const isRecord = usePlayerStore((state: any) => state.isRecord);
  const navigate = useNavigate();
  const postEntertainmentResult = async (id: any) => {
    if (isRecord) {
      const res = await EntertainmentResultPost(id);
      if (res.data.status === 200) {
        navigate(-1);
        console.log("post");
      }
    } else {
      navigate(-1);
      console.log("exit");
    }
  };
  return { postEntertainmentResult };
};
