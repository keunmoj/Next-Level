import SingPopularListGet from "@/api/sing/SingPopularListGet";
import { useState } from "react";

export const useSingPopularListGetHook = () => {
  // 메인 인기음악 네 곡
  const [popularSongList, setPopularSongList] = useState<any>([]);
  // 전체음악 인기순
  const [popularSongAll, setPopularSongAll] = useState([]);
  const getSingPopularList = async () => {
    const res = await SingPopularListGet();
    setPopularSongAll(res.data.entireSongList);
    setPopularSongList(res.data.entireSongList.slice(0, 4));
  };
  return { popularSongList, getSingPopularList, popularSongAll };
};