import { useEffect, useState } from "react";
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
import { useSingPopularListGetHook } from "@/hooks/sing/useSingPopularListHook";

const SingList = () => {
  const navigate = useNavigate();

  const { popularSongAll, getSingPopularList } = useSingPopularListGetHook();

  useEffect(() => {
    getSingPopularList();
  }, []);

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

  const filteredSongs = popularSongAll
    .filter(
      (song: any) =>
        song.songTitle
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(searchTerm.toLowerCase().replace(/\s/g, "")) ||
        song.artistName
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(searchTerm.toLowerCase().replace(/\s/g, ""))
    )
    .sort((a: any) =>
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
        {filteredSongs.map((song: any, index) => (
          <StyledListItem key={song.songId} onClick={openModal}>
            <StyledListItemRank>{index + 1}</StyledListItemRank>
            <StyledListItemImage
              src={
                "https://ddoya-bucket.s3.ap-northeast-2.amazonaws.com/" +
                song.albumImg
              }
            />
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

