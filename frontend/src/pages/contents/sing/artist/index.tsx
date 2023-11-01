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
interface Artist {
  artist: string;
  cover: string;
}

interface Song {
  songTitle: string;
  artistName: string;
  albumImg: string;
}

const SingArtist = () => {
  const navigate = useNavigate();

  const [selectedArtist, setSelectedArtist] = useState<string>();

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

  const songs: Song[] = [
    {
      songTitle: "Next Level",
      artistName: "에스파",
      albumImg:
        "https://image.bugsm.co.kr/album/images/original/200890/20089092.jpg?version=undefined",
    },
    {
      songTitle: "Black Mamba",
      artistName: "에스파",
      albumImg:
        "https://image.bugsm.co.kr/album/images/original/200890/20089092.jpg?version=undefined",
    },
    {
      songTitle: "밤편지",
      artistName: "아이유",
      albumImg:
        "https://image.bugsm.co.kr/album/images/original/200890/20089092.jpg?version=undefined",
    },
    {
      songTitle: "팔레트",
      artistName: "아이유",
      albumImg:
        "https://image.bugsm.co.kr/album/images/original/200890/20089092.jpg?version=undefined",
    },
    {
      songTitle: "잔소리",
      artistName: "아이유",
      albumImg:
        "https://image.bugsm.co.kr/album/images/original/200890/20089092.jpg?version=undefined",
    },
  ];

  const artists: Artist[] = [
    {
      artist: "에스파",
      cover:
        "https://i.namu.wiki/i/ovFP_kDjXd4t20ilq6YsbfNyyx2-zW8H6wJqZdLFFipYri5cHOoS5UbzTeavWJeC96kF11DUGjYpUkvgrb_Gng.webp",
    },
    {
      artist: "뉴진스",
      cover:
        "https://i.namu.wiki/i/ovFP_kDjXd4t20ilq6YsbfNyyx2-zW8H6wJqZdLFFipYri5cHOoS5UbzTeavWJeC96kF11DUGjYpUkvgrb_Gng.webp",
    },
    {
      artist: "아이유",
      cover:
        "https://i.namu.wiki/i/ovFP_kDjXd4t20ilq6YsbfNyyx2-zW8H6wJqZdLFFipYri5cHOoS5UbzTeavWJeC96kF11DUGjYpUkvgrb_Gng.webp",
    },
    {
      artist: "에스파",
      cover:
        "https://i.namu.wiki/i/ovFP_kDjXd4t20ilq6YsbfNyyx2-zW8H6wJqZdLFFipYri5cHOoS5UbzTeavWJeC96kF11DUGjYpUkvgrb_Gng.webp",
    },
    {
      artist: "뉴진스",
      cover:
        "https://i.namu.wiki/i/ovFP_kDjXd4t20ilq6YsbfNyyx2-zW8H6wJqZdLFFipYri5cHOoS5UbzTeavWJeC96kF11DUGjYpUkvgrb_Gng.webp",
    },
    {
      artist: "아이유",
      cover:
        "https://i.namu.wiki/i/ovFP_kDjXd4t20ilq6YsbfNyyx2-zW8H6wJqZdLFFipYri5cHOoS5UbzTeavWJeC96kF11DUGjYpUkvgrb_Gng.webp",
    },
    {
      artist: "에스파",
      cover:
        "https://i.namu.wiki/i/ovFP_kDjXd4t20ilq6YsbfNyyx2-zW8H6wJqZdLFFipYri5cHOoS5UbzTeavWJeC96kF11DUGjYpUkvgrb_Gng.webp",
    },
    {
      artist: "뉴진스",
      cover:
        "https://i.namu.wiki/i/ovFP_kDjXd4t20ilq6YsbfNyyx2-zW8H6wJqZdLFFipYri5cHOoS5UbzTeavWJeC96kF11DUGjYpUkvgrb_Gng.webp",
    },
    {
      artist: "아이유",
      cover:
        "https://i.namu.wiki/i/ovFP_kDjXd4t20ilq6YsbfNyyx2-zW8H6wJqZdLFFipYri5cHOoS5UbzTeavWJeC96kF11DUGjYpUkvgrb_Gng.webp",
    },
  ];

  useEffect(() => {
    setSelectedArtist(artists[0].artist);
  }, []);

  return (
    <StyledArtist>
      <StyledArtistNav>
        <StyledArtistBackButton />
        <StyledArtistTitle>아티스트</StyledArtistTitle>
        <div></div>
      </StyledArtistNav>
      <StyledArtistList>
        {artists.map((artist, index) => (
          <div key={index}>
            <StyledArtistImage
              isSelected={selectedArtist === artist.artist}
              cover={artist.cover}
              onClick={() => setSelectedArtist(artist.artist)}
            >
              <img src={artist.cover} alt={artist.artist} />
            </StyledArtistImage>
          </div>
        ))}
      </StyledArtistList>
      <StyledArtistItemContainer>
        <StyledArtistItemBox>
          {songs.map((song, index) => (
            <StyledArtistItem onClick={openModal} key={index}>
              <StyledArtistItemImage src={song.albumImg} alt={song.songTitle} />
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
