import { useNavigate } from "react-router-dom";
import {
  StyledSing,
  StyledSingTopContainer,
  StyledSingCategory,
  StyledSingBodyContainer,
  StyledSingContentBox,
  StyledSingBox,
  StyledSingImg,
  StyledSingTitle,
  StyledSingArtistContentBox,
  StyledSingArtistBox,
  StyledSingArtistImg,
  StyledSingArtitstTitle,
  StyledSingPlayIcon,
} from "./Sing.styled";
import { useTranslation } from "react-i18next";
import Modal from "@/components/modal";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSingPopularListGetHook } from "@/hooks/sing/useSingPopularListHook";
import { useSingPopularArtistListGetHook } from "@/hooks/sing/useSingPopularArtistHook";
import { S3_ADDRESS } from "@/api/api";

const Sing = () => {
  const { t } = useTranslation();

  // 음악 메인 인기음악 네곡
  // hook
  const { popularSongList, getSingPopularList } = useSingPopularListGetHook();

  useEffect(() => {
    getSingPopularList();
  }, []);

  // 인기 아티스트
  const { popularArtistList, getSingPopularArtistList } =
    useSingPopularArtistListGetHook();
  useEffect(() => {
    getSingPopularArtistList();
  }, []);

  // 카테고리 이동
  const navigate = useNavigate();
  const goCategory = (e: any) => {
    console.log(e.target.id);
    navigate(`/sing/${e.target.id}`);
  };

  // 플레이 모달창
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  const closeModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  const openSingGame = () => {
    navigate("/sing/game");
  };

  return (
    <StyledSing>
      {/* 임시 컨테이너 데이터 들어오면 map 돌릴 예정 */}
      {/* 인기음악 */}
      <StyledSingBodyContainer>
        <StyledSingCategory id="list" onClick={goCategory}>
          {t("contents.sing.category.popular")}
        </StyledSingCategory>
        <StyledSingContentBox onClick={openModal}>
          {popularSongList.map((card: any) => (
            <StyledSingBox key={card.songId}>
              <StyledSingImg
                src={S3_ADDRESS + card.coverImg}
                alt="singImg"
              ></StyledSingImg>
              {/* <StyledSingPlayIcon>▶</StyledSingPlayIcon> */}
              <StyledSingTitle>
                {card.songTitle} - {card.artistName}
              </StyledSingTitle>
            </StyledSingBox>
          ))}
        </StyledSingContentBox>
      </StyledSingBodyContainer>

      {/* 인기아티스트 */}

      <StyledSingBodyContainer>
        <StyledSingCategory id="artist" onClick={goCategory}>
          {t("contents.sing.category.artist")}
        </StyledSingCategory>
        <StyledSingArtistContentBox>
          {popularArtistList.map((card: any) => (
            <StyledSingArtistBox key={card.artistId}>
              <StyledSingArtistImg src={S3_ADDRESS + card.image} />
              <StyledSingArtitstTitle>{card.artistName}</StyledSingArtitstTitle>
            </StyledSingArtistBox>
          ))}
        </StyledSingArtistContentBox>
      </StyledSingBodyContainer>
      {isOpenModal === true && (
        <Modal
          isDetailOpen={isOpenModal}
          closeModal={closeModal}
          openPage={openSingGame}
          modalTitle="플레이"
          modalText="플레이하러갈건가요"
          imgsrc="/learning/aibody.png"
        />
      )}
    </StyledSing>
  );
};

export default Sing;
