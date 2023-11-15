import Sing from "./sing";
import {
  StyledContentText,
  StyledContentTitle,
  StyledContentTopContainer,
  StyledContents,
  StyledContentsBody,
  StyledContentsNav,
  StyledContentsNavButton,
} from "./Contents.styled";
import Drama from "./drama";
import Entertainment from "./entertainment";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import { S3_ADDRESS } from "@/api/api";
import Modal from "@/components/modal";
import { useContentSongHook } from "@/hooks/contents/useContentSongHook";
import { useContentDramaHook } from "@/hooks/contents/useContentDramaHook";
import { useContentEnterHook } from "@/hooks/contents/useContentEnterHook";

const Contents = () => {
  // 노래 및 전반적인 컨텐츠 관련 훅
  const {
    t,
    songCloseModal,
    handleChange,
    handleGoContent,
    songOpenModal,
    openSingGame,
    selectcontents,
    swiperRef,
    isSongOpenModal,
    song,
  } = useContentSongHook();
  // 드라마 관련 훅
  const {
    dramaClipInfo,
    dramaCloseModal,
    dramaOpenModal,
    isDramaOpenModal,
    openDrama,
  } = useContentDramaHook();
  // 예능 관련 훅
  const {
    enterClipInfo,
    enterCloseModal,
    enterOpenModal,
    isEnterOpenModal,
    openEnter,
  } = useContentEnterHook();

  return (
    <StyledContents initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <StyledContentTopContainer id="sing" selectcontents={selectcontents}>
            <StyledContentTitle>K-POP</StyledContentTitle>
            <StyledContentText id="first">
              {t("contents.sing.topFirst")}
            </StyledContentText>
            <StyledContentText id="second">
              {t("contents.sing.topSecond")}
            </StyledContentText>
          </StyledContentTopContainer>
        </SwiperSlide>
        <SwiperSlide>
          <StyledContentTopContainer id="drama" selectcontents={selectcontents}>
            <StyledContentTitle>K-DRAMA</StyledContentTitle>
            <StyledContentText id="first">
              {t("contents.drama.topFirst")}
            </StyledContentText>
            <StyledContentText id="second">
              {t("contents.drama.topSecond")}
            </StyledContentText>
          </StyledContentTopContainer>
        </SwiperSlide>
        <SwiperSlide>
          <StyledContentTopContainer
            id="entertainment"
            selectcontents={selectcontents}
          >
            <StyledContentTitle>K-SHOW</StyledContentTitle>
            <StyledContentText id="first">
              {t("contents.enter.topFirst")}
            </StyledContentText>
            <StyledContentText id="second">
              {t("contents.enter.topSecond")}
            </StyledContentText>
          </StyledContentTopContainer>
        </SwiperSlide>
      </Swiper>
      <StyledContentsNav>
        <StyledContentsNavButton
          id="sing"
          onClick={(e: any) => handleGoContent(e, 0)}
          selectcontents={selectcontents}
        >
          {t("contents.tap.sing")}
        </StyledContentsNavButton>
        <StyledContentsNavButton
          id="drama"
          onClick={(e: any) => handleGoContent(e, 1)}
          selectcontents={selectcontents}
        >
          {t("contents.tap.drama")}
        </StyledContentsNavButton>
        <StyledContentsNavButton
          id="entertainment"
          onClick={(e: any) => handleGoContent(e, 2)}
          selectcontents={selectcontents}
        >
          {t("contents.tap.enter")}
        </StyledContentsNavButton>
      </StyledContentsNav>
      <StyledContentsBody>
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          onSlideChange={handleChange}
        >
          <SwiperSlide>
            <Sing openModal={songOpenModal} />
          </SwiperSlide>
          <SwiperSlide>
            <Drama openModal={dramaOpenModal} />
          </SwiperSlide>
          <SwiperSlide>
            <Entertainment openModal={enterOpenModal} />
          </SwiperSlide>
        </Swiper>
      </StyledContentsBody>
      {isSongOpenModal && (
        <Modal
          isDetailOpen={isSongOpenModal}
          closeModal={songCloseModal}
          openPage={openSingGame}
          modalTitle={song ? song.songTitle : "플레이"}
          modalArtist={song && song.artistName}
          modalText={t("contents.sing.game.modal.goGameModalText")}
          imgsrc={song ? S3_ADDRESS + song.albumImg : "/learning/abdioy.png"}
          completeMent={t("contents.sing.game.modal.ok")}
        />
      )}
      {isDramaOpenModal && (
        <Modal
          isDetailOpen={isDramaOpenModal}
          closeModal={dramaCloseModal}
          openPage={openDrama}
          modalArtist={dramaClipInfo && dramaClipInfo.title}
          modalText={t("contents.sing.game.modal.goGameModalText")}
          completeMent={t("contents.shadowing.openMent")}
          imgsrc={
            dramaClipInfo
              ? S3_ADDRESS + dramaClipInfo.image
              : "/learning/abdioy.png"
          }
        />
      )}
      {isEnterOpenModal && (
        <Modal
          isDetailOpen={isEnterOpenModal}
          closeModal={enterCloseModal}
          openPage={openEnter}
          modalArtist={enterClipInfo && enterClipInfo.title}
          modalText={t("contents.sing.game.modal.goGameModalText")}
          completeMent={t("contents.shadowing.openMent")}
          imgsrc={
            enterClipInfo
              ? S3_ADDRESS + enterClipInfo.image
              : "/learning/abdioy.png"
          }
        />
      )}
    </StyledContents>
  );
};

export default Contents;
