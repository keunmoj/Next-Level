import styled from "styled-components";

const StyledClipContainer = styled.div`
  width: 100vw;
  height: 39vh;
  overflow: scroll;
  margin-bottom: 1vh;
`;

const StyledClipBox = styled.div`
  /* background-color: ${(props) => props.theme.colors.white}; */
  border-radius: 5px;
  padding: 0.5vh;
  display: flex;
  align-items: center;
  height: 10vh;
  border: 2px solid ${(props) => props.theme.colors.gray};
  /* box-shadow: 1px 1px 1px 1px #939393; */
  margin: 1vh;
`;

const StyledImageBox = styled.div`
  /* width: 35%; */
  /* height: 70%; */
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
  /* height: 10vh; */
  border-radius: 5px;
`;

const StyledContentContainer = styled.div`
  width: 50vw;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
`;

const StyledTtile = styled.div`
  font-size: ${(props) => props.theme.fontsize.semilarge};
  font-family: ${(props) => props.theme.fonts.boldfont};
  /* margin-left: 5vw; */
  /* margin-top: 5%; */
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
  /* margin-left: 5vw; */
  /* position: absolute; */
  /* bottom: 6%; */
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
