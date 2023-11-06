import SingPopularArtistListGet from "@/api/sing/SingPopularArtistGet";
import SingArtistSongGet from "@/api/sing/SingArtistSongGet";
import { useState, useEffect } from "react";

export const useSingPopularArtistAllGetHook = () => {
  // 전체 아티스트
  const [artistAll, setArtistAll] = useState([]);
  const [artistSongs, setArtistSongs] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState<string>("1");
  const [isOpenModal, setIsOpenModal] = useState(false);

  const getArtistAll = async () => {
    const res1 = await SingPopularArtistListGet();
    const res2 = await SingArtistSongGet(res1.data.artistList[0].artistId);
    setSelectedArtist(res1.data.artistList[0].artistId);
    const group = res1.data.artistList.filter((artist: any) => artist.isGroup);
    setArtistAll(group);
    setArtistSongs(res2.data.songList);
  };

  const getArtistSongList = async (artistId: string) => {
    const res = await SingArtistSongGet(artistId);
    setArtistSongs(res.data.songList);
  };

  const openModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const closeModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  useEffect(() => {
    getArtistAll();
  }, []);

  useEffect(() => {
    getArtistSongList(selectedArtist);
  }, [selectedArtist]);

  return {
    artistAll,
    artistSongs,
    selectedArtist,
    setSelectedArtist,
    isOpenModal,
    openModal,
    closeModal,
  };
};
