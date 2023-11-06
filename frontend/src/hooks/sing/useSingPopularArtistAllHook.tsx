import SingPopularArtistListGet from "@/api/sing/SingPopularArtistGet";
import SingArtistSongGet from "@/api/sing/SingArtistSongGet";
import { useState } from "react";

export const useSingPopularArtistAllGetHook = () => {
  // 전체 아티스트
  const [artistAll, setArtistAll] = useState([]);
  const [artistSongs, setArtistSongs] = useState([]);

  const getArtistAll = async () => {
    const res1 = await SingPopularArtistListGet();
    const res2 = await SingArtistSongGet(res1.data.artistList[0].artistId);
    const group = res1.data.artistList.filter((artist: any) => artist.isGroup);
    setArtistAll(group);
    setArtistSongs(res2.data.songList);
  };

  const getArtistSongList = async (artistId: string) => {
    const res = await SingArtistSongGet(artistId);
    setArtistSongs(res.data.songList);
  };

  return { artistAll, artistSongs, getArtistAll, getArtistSongList };
};
