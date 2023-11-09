import SingPopularArtistListGet from "@/api/sing/SingPopularArtistGet";
import SingArtistSongGet from "@/api/sing/SingArtistSongGet";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useSingPopularArtistAllGetHook = () => {
  const navigate = useNavigate();
  // 전체 아티스트
  const [artistAll, setArtistAll] = useState([]);
  const [artistSongs, setArtistSongs] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState<string>("1");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [song, setSong] = useState<{
    songId: string;
    songTitle: string;
    coverImg: string;
  } | null>(null);

  const getArtistAll = async () => {
    const res1 = await SingPopularArtistListGet();
    const res2 = await SingArtistSongGet(res1.data.artistList[0].artistId);
    setSelectedArtist(res1.data.artistList[0].artistId);
    setArtistAll(res1.data.artistList);
    setArtistSongs(res2.data.songList);
  };

  const getArtistSongList = async (artistId: string) => {
    const res = await SingArtistSongGet(artistId);
    setArtistSongs(res.data.songList);
  };

  const openModal = (song: any) => {
    setSong(song);
    setIsOpenModal(!isOpenModal);
  };

  const closeModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const openSingGame = () => {
    if (song) {
      navigate(`/sing/game/${song.songId}`);
    }
  };

  const backButton = () => {
    window.history.back();
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
    song,
    openSingGame,
    backButton,
  };
};
