import SingPopularListGet from "@/api/sing/SingPopularListGet";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSingPopularListGetHook = () => {
  const navigate = useNavigate();
  // 메인 인기음악 네 곡
  const [popularSongList, setPopularSongList] = useState<any>([]);

  const getSingPopularList = async () => {
    const res = await SingPopularListGet();
    setPopularSongList(res.data.entireSongList.slice(0, 4));
  };

  // 전체리스트 이동
  const goSongList = () => {
    navigate("/sing/list");
  };
  // 아티스트 이동
  const goArtistList = (artistId: any = "") => {
    navigate("/sing/artist", { state: { artistId: artistId } });
  };

  useEffect(() => {
    getSingPopularList();
  }, []);

  return {
    popularSongList,
    goSongList,
    goArtistList,
  };
};
