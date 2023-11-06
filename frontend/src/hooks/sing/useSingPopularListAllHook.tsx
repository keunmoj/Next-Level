import SingPopularListGet from "@/api/sing/SingPopularListGet";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSingPopularListAllGetHook = () => {
  const navigate = useNavigate();

  const [popularSongAll, setPopularSongAll] = useState([]);
  const [song, setSong] = useState<{
    songId: string;
    songTitle: string;
    coverImg: string;
  } | null>(null);

  useEffect(() => {
    getSingPopularListAll();
  }, []);

  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = (song: any) => {
    console.log(song);
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

  const filteredSongs = popularSongAll
    .filter(
      (song: any) =>
        song.songTitle
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(searchTerm.toLowerCase().replace(/\s/g, "")) ||
        song.artistName
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(searchTerm.toLowerCase().replace(/\s/g, ""))
    )
    .sort((a: any) =>
      a.songTitle.toLowerCase().includes(searchTerm.toLowerCase()) ? -1 : 1
    );

  const getSingPopularListAll = async () => {
    const res = await SingPopularListGet();
    setPopularSongAll(res.data.entireSongList);
  };
  return {
    showSearch,
    setShowSearch,
    searchTerm,
    setSearchTerm,
    filteredSongs,
    openModal,
    isOpenModal,
    closeModal,
    song,
    openSingGame,
  };
};
