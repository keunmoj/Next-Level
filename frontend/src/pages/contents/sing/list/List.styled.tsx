import styled from "styled-components";
import { SearchBar } from "antd-mobile";

const StyledList = styled.div`
  margin: 25px 10px 100px;
`;

const StyledListNav = styled.div`
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
`;

const StyledListSearchButton = styled.img.attrs({
  src: "/sing/search.svg",
  alt: "검색",
})`
  width: 30px;
`;

const StyledListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledListItemRank = styled.div`
  font-size: 55px;
  font-family: ${(props) => props.theme.fonts.boldfont};
  margin-right: 10px;
`;

const StyledListItemImage = styled.img.attrs({
  alt: "Album Cover",
})`
  width: 80px;
  height: 80px;
  margin-right: 10px;
  border-radius: 50%;
`;

const StyledListItemContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  flex-grow: 1;
`;

const StyledListItemContentArtist = styled.div`
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  margin-bottom: 5px;
`;

const StyledListItemContentSong = styled.div`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.regularfont};
`;

const StyledListItemPlayButton = styled.img.attrs({
  src: "/sing/play.png",
  alt: "플레이",
})`
  margin-left: 10px;
  width: 45px;
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
  StyledListItemImage,
  StyledListItemContent,
  StyledListItemContentArtist,
  StyledListItemContentSong,
  StyledListItemPlayButton,
};
