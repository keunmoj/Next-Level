import styled from "styled-components";

const StyledArtist = styled.div`
  margin: 0px 10px;
`;

const StyledArtistNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 15px;
  border-bottom: 3px solid black;
  padding: 25px 0px 5px;
`;

const StyledArtistBackButton = styled.img.attrs({
  src: "/sing/back.png",
  alt: "뒤로",
})`
  width: 30px;
`;

const StyledArtistTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.boldfont};
`;

const StyledArtistList = styled.div`
  margin-bottom: 5px;
  padding-bottom: 5px;
  display: flex;
  overflow-x: scroll;
  gap: 10px;
  border-bottom: 1px solid gray;
`;

const StyledArtistImage = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isSelected",
})<{ isSelected: boolean; cover: string }>`
  margin: 10px 5px 5px;
  position: relative;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  &::before {
    content: "";
    position: absolute;
    top: -5px;
    bottom: -5px;
    left: -5px;
    right: -5px;
    background: ${(props) =>
      props.isSelected
        ? `linear-gradient(180deg, #F7BBB2 0%, rgba(247, 187, 178, 0.49) 22.92%, rgba(247, 187, 178, 0.00) 50.52%, rgba(247, 187, 178, 0.35) 75%, #F7BBB2 99.99%, rgba(247, 187, 178, 0.00) 100%)`
        : "#D9D9D9"};
    border-radius: 50%;
    z-index: 1;
  }
  img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    z-index: 2;
  }
`;

const StyledArtistName = styled.div`
  margin: 3px 0px 1px;
  text-align: center;
  font-size: ${(props) => props.theme.fontsize.small};
  font-family: ${(props) => props.theme.fonts.semiboldfont};
`;

const StyledArtistItemContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledArtistItemBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px 30px;
  width: 100%;
`;

const StyledArtistItem = styled.div`
  text-align: center;
  width: 100%;
`;

const StyledArtistItemImage = styled.img`
  border-radius: 5%;
  width: 40vw;
  height: 18vh;
  object-fit: cover;
`;

const StyledArtistItemTitle = styled.div`
  width: 181px;
  margin: 5px 0px 15px;
  font-size: ${(props) => props.theme.fontsize.large};
  font-family: ${(props) => props.theme.fonts.boldfont};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export {
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
};
