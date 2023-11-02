import DramarArtistListGet from "@/api/drama/DramaArtistList";
import { useState } from "react";

export const useDramaArtistListGetHook = () => {
  const [dramaArtistList, setDramaArtistList] = useState();
  const getDramaArtistList = async () => {
    const res = await DramarArtistListGet();
    // console.log(res);
  };
  return { dramaArtistList, getDramaArtistList };
};
