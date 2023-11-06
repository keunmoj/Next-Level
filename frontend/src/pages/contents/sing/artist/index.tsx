import {
  StyledArtist,
  StyledArtistNav,
  StyledArtistBackButton,
  StyledArtistTitle,
  StyledArtistList,
  StyledArtistImage,
  StyledArtistItemContainer,
  StyledArtistItemBox,
  StyledArtistItem,
  StyledArtistItemImage,
  StyledArtistItemTitle,
} from "./Artist.styled";
import Modal from "@/components/modal";
import { useSingPopularArtistAllGetHook } from "@/hooks/sing/useSingPopularArtistAllHook";

const SingArtist = () => {
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
  } = useSingPopularArtistAllGetHook();

  return (
    <StyledArtist>
      <StyledArtistNav>
        <StyledArtistBackButton />
        <StyledArtistTitle>아티스트</StyledArtistTitle>
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
              <img
                src={
                  "https://ddoya-bucket.s3.ap-northeast-2.amazonaws.com/" +
                  artist.image
                }
                alt={artist.artistName}
              />
            </StyledArtistImage>
          </div>
        ))}
      </StyledArtistList>
      <StyledArtistItemContainer>
        <StyledArtistItemBox>
          {artistSongs.map((song: any, index) => (
            <StyledArtistItem onClick={() => openModal(song)} key={index}>
              <StyledArtistItemImage
                src={
                  "https://ddoya-bucket.s3.ap-northeast-2.amazonaws.com/" +
                  song.albumImg
                }
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
          modalText="진행하시겠습니까?"
          imgsrc={
            song
              ? `https://ddoya-bucket.s3.ap-northeast-2.amazonaws.com/${song.coverImg}`
              : "/learning/abdioy.png"
          }
        />
      )}
    </StyledArtist>
  );
};

export default SingArtist;
