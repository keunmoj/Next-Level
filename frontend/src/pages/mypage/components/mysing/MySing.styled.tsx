import styled from "styled-components";

const StyledClipContainer = styled.div`
  width: 100vw;
  height: 39vh;
  overflow: scroll;
  margin-bottom: 1vh;
  font-family: ${(props) => props.theme.fonts.regularfont};
  /* border: 1px solid red; */
  /* padding: 10px; */
`;

const StyledGrid = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: fit-content;
  margin: 10px;
`;

const StyledClipBox = styled.div`
  margin: 10px 5px 0px 5px;
`;

const StyledImageBox = styled.div`
  /* border: 1px solid green; */
  /* height: 20vh; */
  height: 100%;
`;

const StyledSingImage = styled.img.attrs<any>((props) => ({
  src: props.src,
}))`
  width: 28vw;
  border-radius: 3px;
`;

const StyledContentContainer = styled.div`
  height: 100%;
  width: 80%;
`;

const StyledTtile = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: ${(props) => props.theme.fontsize.regular};
  width: 100%;
`;

const StyledArtist = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: ${(props) => props.theme.fontsize.regular};
`;

const StyledClipButton = styled.button`
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.regularfont};
  border: none;
  font-size: ${(props) => props.theme.fontsize.xsmall};
  width: 80px;
  height: 30px;
  border-radius: 5px;
`;

const StyledScore = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: ${(props) => props.theme.fontsize.regular};
  margin-bottom: 10px;
`;

export {
  StyledClipContainer,
  StyledClipBox,
  StyledImageBox,
  StyledContentContainer,
  StyledTtile,
  StyledClipButton,
  StyledScore,
  StyledSingImage,
  StyledArtist,
  StyledGrid,
};
