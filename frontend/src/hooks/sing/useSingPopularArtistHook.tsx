import SingPopularArtistListGet from "@/api/sing/SingPopularArtistGet";
import { useState } from "react";

export const useSingPopularArtistListGetHook = () => {
  // 메인 인기아티스트
  const [popularArtistList, setPopularArtistList] = useState([]);
  const getSingPopularArtistList = async () => {
    const res = await SingPopularArtistListGet();
    setPopularArtistList(res.data.artistList.slice(0, 5));
  };
  return { popularArtistList, getSingPopularArtistList };
};
