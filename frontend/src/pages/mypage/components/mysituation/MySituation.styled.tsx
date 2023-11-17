import styled from "styled-components";

const StyledClipContainer = styled.div`
  width: 100vw;
  height: 39vh;
  overflow: scroll;
  margin-bottom: 1vh;
  font-family: ${(props) => props.theme.fonts.regularfont};
  /* border: 1px solid red; */
`;

const StyledGrid = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: fit-content;
  margin: 10px;
`;

const StyledClipBox = styled.div`
  /* margin: 10px; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  /* border: 1px solid green; */
  margin-bottom: 10px;
`;

const StyledContentContainer = styled.div`
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.colors.gray};
  width: 28vw;
  height: 28vw;
`;

const StyledContainer = styled.div`
  /* border: 1px solid green; */
  margin: 10px;
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: space-evenly;
`;

const StyledImageBox = styled.div`
  border-radius: 3px;
  display: flex;
  align-items: center;
  margin-bottom: 0.5vh;
`;

const StyledImage = styled.img.attrs<any>((props) => ({
  src: props.src,
}))`
  height: 30px;
  margin-right: 5px;
`;

const StyledTtile = styled.div`
  font-size: ${(props) => props.theme.fontsize.semilarge};
  font-family: ${(props) => props.theme.fonts.boldfont};
`;

const StyledArtist = styled.div`
  font-size: ${(props) => props.theme.fontsize.regular};
`;

const StyledClipButton = styled.div``;

const StyledScore = styled.div``;

export {
  StyledClipContainer,
  StyledClipBox,
  StyledImageBox,
  StyledImage,
  StyledContentContainer,
  StyledTtile,
  StyledClipButton,
  StyledScore,
  StyledArtist,
  StyledContainer,
  StyledGrid,
};
