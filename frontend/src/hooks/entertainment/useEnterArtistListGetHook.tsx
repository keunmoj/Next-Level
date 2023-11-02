import EnterArtistListGet from "@/api/entertainment/EnterArtistListGet";
import { useState } from "react";

export const useEnterArtistListGetHook = () => {
  // 예능 아티스트 전체 리스트
  const [enterArtistList, setEnterArtistList] = useState<any>();
  // 아티스트 활약상을 위한 랜덤 아티스트
  const [enterRandomArtist, setEnterRandomArtist] = useState<any>();
  const getEnterArtistList = async () => {
    const res = await EnterArtistListGet();
    setEnterArtistList(res.data.data.artists);

    // 아티스트 랜덤 추출
    const randomArtist =
      res.data.data.artists[
        Math.floor(Math.random() * res.data.data.artists.length)
      ];
    setEnterRandomArtist(randomArtist);
  };
  return { enterArtistList, enterRandomArtist, getEnterArtistList };
};
