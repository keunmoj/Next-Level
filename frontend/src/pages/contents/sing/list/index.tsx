import { useState } from "react";
import Highlighter from "react-highlight-words";
import { SearchBar } from "antd-mobile";
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

interface Song {
  songTitle: string;
  artistName: string;
  albumImg: string;
}

const SingList = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

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
          <StyledListItem key={index}>
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
    </StyledList>
  );
};

export default SingList;
