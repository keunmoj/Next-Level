import styled from "styled-components";

const StyledClipContainer = styled.div`
  width: 100vw;
  height: 39vh;
  overflow: scroll;
  margin-bottom: 1vh;
`;

const StyledClipBox = styled.div`
  height: 12vh;
  width: 90%;
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.white};
  margin: 5px 10px 0px 10px;
  padding: 0px 0px 0px 10px;
`;

const StyledImageBox = styled.div`
  /* width: 35%; */
  /* height: 70%; */
  border-radius: 5px;
`;

const StyledImage = styled.img.attrs<any>((props) => ({
  src: props.src,
}))`
  width: 35vw;
  height: 10vh;
  border-radius: 5px;
`;

const StyledContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 00px 10px 0px 10px;
  justify-content: space-around;
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTtile = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: ${(props) => props.theme.fontsize.regular};
  color: black;
  margin-bottom: 5px;
  /* margin-left: 5vw; */
  /* margin-top: 5%; */
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
  width: 20vw;
  height: 3vh;
  border-radius: 5px;
`;

const StyledScore = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: ${(props) => props.theme.fontsize.semilarge};
  /* margin-left: 5vw; */
  /* margin-top: 5%; */
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
  StyledArtist,
  StyledTextContainer,
};
