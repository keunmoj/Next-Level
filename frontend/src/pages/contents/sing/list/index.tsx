import { useState } from "react";
import Highlighter from "react-highlight-words";
import {
  StyledList,
  StyledListNav,
  StyledListSearchBar,
  StyledListCloseButton,
  StyledListBackButton,
  StyledListTitle,
  StyledListSearchButton,
  StyledListItemContainer,
  StyledListItem,
  StyledListItemContent,
  StyledListItemRank,
  StyledListItemImage,
  StyledListItemContentArtist,
  StyledListItemContentSong,
  StyledListItemPlayButton,
} from "./List.styled";
import Modal from "@/components/modal";
import { useNavigate } from "react-router-dom";

interface Song {
  songTitle: string;
  artistName: string;
  albumImg: string;
}

const SingList = () => {
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

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

  const filteredSongs: Song[] = songs
    .filter(
      (song) =>
        song.songTitle
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(searchTerm.toLowerCase().replace(/\s/g, "")) ||
        song.artistName
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(searchTerm.toLowerCase().replace(/\s/g, ""))
    )
    .sort((a) =>
      a.songTitle.toLowerCase().includes(searchTerm.toLowerCase()) ? -1 : 1
    );

  return (
    <StyledList>
      <StyledListNav>
        {showSearch ? (
          <>
            <StyledListSearchBar
              value={searchTerm}
              onChange={(value) => setSearchTerm(value)}
            />
            <StyledListCloseButton onClick={() => setShowSearch(false)} />
          </>
        ) : (
          <>
            <StyledListBackButton onClick={() => {}} />
            <StyledListTitle>음악</StyledListTitle>
            <StyledListSearchButton onClick={() => setShowSearch(true)} />
          </>
        )}
      </StyledListNav>

      <StyledListItemContainer>
        {filteredSongs.map((song, index) => (
          <StyledListItem key={index} onClick={openModal}>
            <StyledListItemRank>{index + 1}</StyledListItemRank>
            <StyledListItemImage src={song.albumImg} />
            <StyledListItemContent>
              <StyledListItemContentArtist>
                <Highlighter
                  searchWords={[searchTerm]}
                  autoEscape={true}
                  textToHighlight={song.songTitle}
                  highlightStyle={{
                    color: "black",
                    backgroundColor: "#F7DDBE",
                  }}
                />
              </StyledListItemContentArtist>
              <StyledListItemContentSong>
                <Highlighter
                  searchWords={[searchTerm]}
                  autoEscape={true}
                  textToHighlight={song.artistName}
                  highlightStyle={{
                    color: "black",
                    backgroundColor: "#F7DDBE",
                  }}
                />
              </StyledListItemContentSong>
            </StyledListItemContent>
            <StyledListItemPlayButton />
          </StyledListItem>
        ))}
      </StyledListItemContainer>
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
    </StyledList>
  );
};

export default SingList;
