import styled from "styled-components";

const StyledClipContainer = styled.div`
  width: 100vw;
  height: 39vh;
  overflow: scroll;
  margin-bottom: 1vh;
`;

const StyledClipBox = styled.div`
  border-radius: 5px;
  padding: 0.5vh;
  display: flex;
  align-items: center;
  height: 10vh;
  border: 2px solid ${(props) => props.theme.colors.gray};
  margin: 1vh;
`;

const StyledImageBox = styled.div`
  border-radius: 5px;
`;

const StyledImage = styled.img.attrs<any>((props) => ({
  src: props.src,
}))`
  height: 6vh;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;

const StyledSingImage = styled.img.attrs<any>((props) => ({
  src: props.src,
}))`
  width: 23vw;
  border-radius: 5px;
`;

const StyledContentContainer = styled.div`
  width: 50vw;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
`;

const StyledTtile = styled.div`
  font-size: ${(props) => props.theme.fontsize.semilarge};
  font-family: ${(props) => props.theme.fonts.boldfont};
`;

const StyledArtist = styled.div`
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
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.fontsize.xlarge};
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  color: #ce3b3b;
`;

export {
  StyledClipContainer,
  StyledClipBox,
  StyledImageBox,
  StyledImage,
  StyledContentContainer,
  StyledTtile,
  StyledClipButton,
  StyledScore,
  StyledSingImage,
  StyledArtist,
};
