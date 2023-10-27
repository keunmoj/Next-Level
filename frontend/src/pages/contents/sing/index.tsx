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
} from "./Sing.styled";
import { useTranslation } from "react-i18next";
import Modal from "@/components/modal";
import { useState } from "react";

const Sing = () => {
  const { t } = useTranslation();
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
      <StyledSingTopContainer>K-POP,</StyledSingTopContainer>

      {/* 임시 컨테이너 데이터 들어오면 map 돌릴 예정 */}
      {/* 인기음악 */}
      <StyledSingBodyContainer>
        <StyledSingCategory id="list" onClick={goCategory}>
          {t("contents.sing.category.popular")}
        </StyledSingCategory>
        <StyledSingContentBox onClick={openModal}>
          <StyledSingBox>
            <StyledSingImg>노래이미지</StyledSingImg>
            <StyledSingTitle>노래제목</StyledSingTitle>
          </StyledSingBox>
          <StyledSingBox>
            <StyledSingImg>노래이미지</StyledSingImg>
            <StyledSingTitle>노래제목</StyledSingTitle>
          </StyledSingBox>
          <StyledSingBox>
            <StyledSingImg>노래이미지</StyledSingImg>
            <StyledSingTitle>노래제목</StyledSingTitle>
          </StyledSingBox>
          <StyledSingBox>
            <StyledSingImg>노래이미지</StyledSingImg>
            <StyledSingTitle>노래제목</StyledSingTitle>
          </StyledSingBox>
        </StyledSingContentBox>

        {/* 인기아티스트 */}

        <StyledSingCategory id="artist" onClick={goCategory}>
          {t("contents.sing.category.artist")}
        </StyledSingCategory>
        <StyledSingArtistContentBox>
          <StyledSingArtistBox>
            <StyledSingArtistImg></StyledSingArtistImg>
            <StyledSingArtitstTitle>가수이름</StyledSingArtitstTitle>
          </StyledSingArtistBox>
          <StyledSingArtistBox>
            <StyledSingArtistImg></StyledSingArtistImg>
            <StyledSingArtitstTitle>가수이름</StyledSingArtitstTitle>
          </StyledSingArtistBox>
          <StyledSingArtistBox>
            <StyledSingArtistImg></StyledSingArtistImg>
            <StyledSingArtitstTitle>가수이름</StyledSingArtitstTitle>
          </StyledSingArtistBox>
          <StyledSingArtistBox>
            <StyledSingArtistImg></StyledSingArtistImg>
            <StyledSingArtitstTitle>가수이름</StyledSingArtitstTitle>
          </StyledSingArtistBox>
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
