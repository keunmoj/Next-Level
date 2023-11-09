import SingPopularListGet from "@/api/sing/SingPopularListGet";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSingPopularListGetHook = () => {
  const navigate = useNavigate();
  // 메인 인기음악 네 곡
  const [popularSongList, setPopularSongList] = useState<any>([]);
  const [song, setSong] = useState<{
    songId: string;
    songTitle: string;
    coverImg: string;
  } | null>(null);

  const getSingPopularList = async () => {
    const res = await SingPopularListGet();
    setPopularSongList(res.data.entireSongList.slice(0, 4));
  };

  // 플레이 모달창
  const [isOpenModal, setIsOpenModal] = useState(false);
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

  // 카테고리 이동

  const goCategory = (e: any) => {
    navigate(`/sing/${e.target.id}`);
  };

  useEffect(() => {
    getSingPopularList();
  }, []);

  return {
    popularSongList,
    song,
    openModal,
    closeModal,
    openSingGame,
    goCategory,
    isOpenModal,
  };
};
