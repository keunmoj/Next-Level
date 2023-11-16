import DramaClipListGet from "@/api/drama/DramaClipListGet";
import useNavState from "@/stores/nav/useNavState";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const useContentSongHook = () => {
  const navigate = useNavigate();
  const swiperRef = useRef<any>(null);
  // 다국어
  const { t } = useTranslation();

  const [song, setSong] = useState<{
    songId: string;
    songTitle: string;
    albumImg: string;
    artistName: string;
  } | null>(null);
  // 플레이 모달창
  const [isSongOpenModal, setIsOpenModal] = useState(false);

  const songOpenModal = (song: any) => {
    setSong(song);
    setIsOpenModal(!isSongOpenModal);
  };
  const songCloseModal = () => {
    setIsOpenModal(!isSongOpenModal);
  };
  const openSingGame = () => {
    if (song) {
      navigate(`/sing/game/${song.songId}`);
    }
  };

  const selectcontents = useNavState((state: any) => state.selectcontents);
  const setselectcontents = useNavState(
    (state: any) => state.setselectcontents
  );

  const handleGoContent = (e: any, index: any) => {
    swiperRef.current.swiper.slideTo(index);
    setselectcontents(e.target.id);
  };
  const handleChange = (e: any) => {
    if (e.activeIndex === 0) {
      setselectcontents("sing");
    } else if (e.activeIndex === 1) {
      setselectcontents("drama");
    } else if (e.activeIndex === 2) {
      setselectcontents("entertainment");
    }
  };

  useEffect(() => {
    if (selectcontents === "sing") {
      swiperRef.current.swiper.slideTo(0);
    } else if (selectcontents === "drama") {
      swiperRef.current.swiper.slideTo(1);
    } else if (selectcontents === "entertainment") {
      swiperRef.current.swiper.slideTo(2);
    }
  }, []);

  return {
    t,
    openSingGame,
    songOpenModal,
    songCloseModal,
    handleGoContent,
    handleChange,
    selectcontents,
    swiperRef,
    isSongOpenModal,
    song,
  };
};
