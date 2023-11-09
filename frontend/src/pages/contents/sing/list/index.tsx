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
import { useSingPopularListAllGetHook } from "@/hooks/sing/useSingPopularListAllHook";
import { S3_ADDRESS } from "@/api/api";

const SingList = () => {
  const {
    showSearch,
    setShowSearch,
    searchTerm,
    setSearchTerm,
    filteredSongs,
    openModal,
    isOpenModal,
    closeModal,
    song,
    openSingGame,
    backButton,
  } = useSingPopularListAllGetHook();

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
            <StyledListBackButton onClick={backButton} />
            <StyledListTitle>음악</StyledListTitle>
            <StyledListSearchButton onClick={() => setShowSearch(true)} />
          </>
        )}
      </StyledListNav>

      <StyledListItemContainer>
        {filteredSongs.map((song: any, index) => (
          <StyledListItem key={song.songId} onClick={() => openModal(song)}>
            <StyledListItemRank>{index + 1}</StyledListItemRank>
            <StyledListItemImage src={S3_ADDRESS + song.albumImg} />
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
      {isOpenModal && (
        <Modal
          isDetailOpen={isOpenModal}
          closeModal={closeModal}
          openPage={openSingGame}
          modalTitle={song ? song.songTitle : "플레이"}
          modalText="진행하시겠습니까?"
          imgsrc={song ? S3_ADDRESS + song.coverImg : "/learning/abdioy.png"}
        />
      )}
    </StyledList>
  );
};

export default SingList;
