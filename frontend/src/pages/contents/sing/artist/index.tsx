import { S3_ADDRESS } from "@/api/api";
import {
  StyledArtist,
  StyledArtistNav,
  StyledArtistBackButton,
  StyledArtistTitle,
  StyledArtistList,
  StyledArtistImage,
  StyledArtistName,
  StyledArtistItemContainer,
  StyledArtistItemBox,
  StyledArtistItem,
  StyledArtistItemImage,
  StyledArtistItemTitle,
} from "./Artist.styled";
import Modal from "@/components/modal";
import { useSingPopularArtistAllGetHook } from "@/hooks/sing/useSingPopularArtistAllHook";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SingArtist = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const artistIdState = location.state?.artistId;
  const {
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
  } = useSingPopularArtistAllGetHook(artistIdState);

  return (
    <StyledArtist>
      <StyledArtistNav>
        <StyledArtistBackButton onClick={backButton} />
        <StyledArtistTitle>{t("contents.sing.artilstList")}</StyledArtistTitle>
        <div></div>
      </StyledArtistNav>
      <StyledArtistList>
        {artistAll.map((artist: any) => (
          <div key={artist.artistId}>
            <StyledArtistImage
              isSelected={selectedArtist === artist.artistId}
              cover={artist.cover}
              onClick={() => setSelectedArtist(artist.artistId)}
            >
              <img src={S3_ADDRESS + artist.image} alt={artist.artistName} />
            </StyledArtistImage>
            <StyledArtistName>{artist.artistName}</StyledArtistName>
          </div>
        ))}
      </StyledArtistList>
      <StyledArtistItemContainer>
        <StyledArtistItemBox>
          {artistSongs.map((song: any, index) => (
            <StyledArtistItem onClick={() => openModal(song)} key={index}>
              <StyledArtistItemImage
                src={S3_ADDRESS + song.albumImg}
                alt={song.songTitle}
              />
              <StyledArtistItemTitle>{song.songTitle}</StyledArtistItemTitle>
            </StyledArtistItem>
          ))}
        </StyledArtistItemBox>
      </StyledArtistItemContainer>
      {isOpenModal && (
        <Modal
          isDetailOpen={isOpenModal}
          closeModal={closeModal}
          openPage={openSingGame}
          modalTitle={song ? song.songTitle : "플레이"}
          modalArtist={song && song.artistName}
          modalText={t("contents.sing.game.modal.goGameModalText")}
          imgsrc={song ? S3_ADDRESS + song.albumImg : "/learning/abdioy.png"}
        />
      )}
    </StyledArtist>
  );
};

export default SingArtist;
