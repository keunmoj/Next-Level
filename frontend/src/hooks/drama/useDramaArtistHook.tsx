import DramarArtistListGet from "@/api/drama/DramaArtistList";
import { useState } from "react";

export const useDramaArtistListGetHook = () => {
  const [dramaArtistList, setDramaArtistList] = useState<any>();
  // 랜덤 아티스트 출력
  const [dramaRandomArtist, setDramaRandomArtist] = useState<any>();
  const getDramaArtistList = async () => {
    const res = await DramarArtistListGet();
    setDramaArtistList(res.data.data.artists.slice(0, 8));
    const randomArtist =
      res.data.data.artists[
        Math.floor(Math.random() * res.data.data.artists.length)
      ];
    setDramaRandomArtist(randomArtist);
  };

  return { dramaArtistList, dramaRandomArtist, getDramaArtistList };
};
