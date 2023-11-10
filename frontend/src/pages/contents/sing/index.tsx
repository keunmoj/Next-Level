import {
  StyledSing,
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
import { useSingPopularListGetHook } from "@/hooks/sing/useSingPopularListHook";
import { useSingPopularArtistListGetHook } from "@/hooks/sing/useSingPopularArtistHook";
import { S3_ADDRESS } from "@/api/api";

const Sing = () => {
  const { t } = useTranslation();

  // 음악 메인 인기음악 네곡
  // hook
  const {
    popularSongList,
    closeModal,
    goSongList,
    goArtistList,
    openModal,
    openSingGame,
    song,
    isOpenModal,
  } = useSingPopularListGetHook();

  // 인기 아티스트
  const { popularArtistList } = useSingPopularArtistListGetHook();

  return (
    <StyledSing>
      {/* 임시 컨테이너 데이터 들어오면 map 돌릴 예정 */}
      {/* 인기음악 */}
      <StyledSingBodyContainer>
        <StyledSingCategory id="list" onClick={goSongList}>
          {t("contents.sing.category.popular")}
        </StyledSingCategory>
        <StyledSingContentBox>
          {popularSongList.map((song: any) => (
            <StyledSingBox key={song.songId} onClick={() => openModal(song)}>
              <StyledSingImg
                src={S3_ADDRESS + song.coverImg}
                alt="singImg"
              ></StyledSingImg>
              {/* <StyledSingPlayIcon>▶</StyledSingPlayIcon> */}
              <StyledSingTitle>
                {song.songTitle} - {song.artistName}
              </StyledSingTitle>
            </StyledSingBox>
          ))}
        </StyledSingContentBox>
      </StyledSingBodyContainer>

      {/* 인기아티스트 */}

      <StyledSingBodyContainer>
        <StyledSingCategory id="artist" onClick={() => goArtistList()}>
          {t("contents.sing.category.artist")}
        </StyledSingCategory>
        <StyledSingArtistContentBox>
          {popularArtistList.map((song: any) => (
            <StyledSingArtistBox
              key={song.artistId}
              onClick={() => goArtistList(song.artistId)}
            >
              <StyledSingArtistImg src={S3_ADDRESS + song.image} />
              <StyledSingArtitstTitle>{song.artistName}</StyledSingArtitstTitle>
            </StyledSingArtistBox>
          ))}
        </StyledSingArtistContentBox>
      </StyledSingBodyContainer>
      {isOpenModal === true && (
        <Modal
          isDetailOpen={isOpenModal}
          closeModal={closeModal}
          openPage={openSingGame}
          modalTitle={song ? song.songTitle : "플레이"}
          modalArtist={song && song.artistName}
          modalText="진행하시겠습니까?"
          imgsrc={song ? S3_ADDRESS + song.albumImg : "/learning/abdioy.png"}
        />
      )}
    </StyledSing>
  );
};

export default Sing;
