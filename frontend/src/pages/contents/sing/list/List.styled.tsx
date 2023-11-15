import styled from "styled-components";
import { SearchBar } from "antd-mobile";

const StyledList = styled.div`
  margin: 25px 10px 100px;
  font-family: ${(props) => props.theme.fonts.regularfont};
  font-size: ${(props) => props.theme.fontsize.regular};
`;

const StyledListNav = styled.div`
  position: fixed;
  width: 100vw;
  top: 0px;
  left: 0px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 3px solid black;
  padding-bottom: 5px;
`;

const StyledListSearchBar = styled(SearchBar).attrs({
  placeholder: "검색어를 입력하세요.",
})`
  width: 85vw;
  --height: 40px;
`;

const StyledListCloseButton = styled.img.attrs({
  src: "/sing/close.png",
  alt: "닫기",
})`
  width: 40px;
`;

const StyledListBackButton = styled.img.attrs({
  src: "/sing/back.png",
  alt: "뒤로",
})`
  width: 30px;
`;

const StyledListTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: ${(props) => props.theme.fontsize.large};
`;

const StyledListSearchButton = styled.img.attrs({
  src: "/sing/search.svg",
  alt: "검색",
})`
  width: 30px;
`;

const StyledListItemContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

const StyledListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  /* background-color: ${(props) => props.theme.colors.white}; */
  padding: 1vh 2vh 1vh 0vh;
  /* border-radius: 5px; */
  /* border: 1px solid ${(props) => props.theme.colors.black}; */
`;

const StyledListItemRank = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: ${(props) => props.theme.fontsize.semilarge};
  text-align: center;
  width: 10vw;
`;

const StyledListItemImageBox = styled.div`
  width: 15vw;
  display: flex;
  justify-content: center;
`;

const StyledListItemImage = styled.img.attrs({
  alt: "Album Cover",
})`
  width: 50px;
  height: 50px;
  border-radius: 5px;
`;

const StyledListItemContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 50vw;
  flex-grow: 1;
`;

const StyledListItemContentArtist = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: ${(props) => props.theme.fontsize.semilarge};
  margin-bottom: 5px;
`;

const StyledListItemContentSong = styled.div``;

const StyledListItemPlayButton = styled.img.attrs({
  src: "/sing/play2.png",
  alt: "플레이",
})`
  margin-left: 10px;
  width: 25px;
`;

export {
  StyledList,
  StyledListNav,
  StyledListSearchBar,
  StyledListCloseButton,
  StyledListBackButton,
  StyledListTitle,
  StyledListSearchButton,
  StyledListItemContainer,
  StyledListItem,
  StyledListItemRank,
  StyledListItemImageBox,
  StyledListItemImage,
  StyledListItemContent,
  StyledListItemContentArtist,
  StyledListItemContentSong,
  StyledListItemPlayButton,
};
