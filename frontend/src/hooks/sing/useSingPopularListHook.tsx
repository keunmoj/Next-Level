import SingPopularListGet from "@/api/sing/SingPopularListGet";
import { useState } from "react";

export const useSingPopularListGetHook = () => {
  // 메인 인기음악 네 곡
  const [popularSongList, setPopularSongList] = useState<any>([]);
  const getSingPopularList = async () => {
    const res = await SingPopularListGet();
    setPopularSongList(res.data.entireSongList.slice(0, 4));
  };
  return { popularSongList, getSingPopularList };
};
