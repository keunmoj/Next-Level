import { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { useSingPopularArtistAllGetHook } from "@/hooks/sing/useSingPopularArtistAllHook";

const SingArtist = () => {
  const navigate = useNavigate();

  const { artistAll, artistSongs, getArtistAll, getArtistSongList } =
    useSingPopularArtistAllGetHook();

  const [selectedArtist, setSelectedArtist] = useState<string>("");

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

  useEffect(() => {
    getArtistAll();
    console.log(artistAll);
  }, []);

  useEffect(() => {
    getArtistSongList(selectedArtist);
  }, [selectedArtist]);

  return (
    <StyledArtist>
      <StyledArtistNav>
        <StyledArtistBackButton />
        <StyledArtistTitle>아티스트</StyledArtistTitle>
        <div></div>
      </StyledArtistNav>
      <StyledArtistList>
        {artistAll.map((artist: any, index) => (
          <div key={artist.artistId}>
            <StyledArtistImage
              isSelected={selectedArtist === artist.artist}
              cover={artist.cover}
              onClick={() => setSelectedArtist(artist.artist)}
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
            <StyledArtistItem onClick={openModal} key={index}>
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
    </StyledArtist>
  );
};

export default SingArtist;
