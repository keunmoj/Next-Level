import styled from "styled-components";

const StyledClipContainer = styled.div`
  width: 100vw;
  height: 39vh;
  overflow: scroll;
  margin-bottom: 1vh;
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* gap: 10px 10px; */
  font-family: ${(props) => props.theme.fonts.regularfont};
`;

const StyledClipBox = styled.div`
  height: 25vh;
  /* width: 50%; */
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid ${(props) => props.theme.colors.gray}; */
  margin: 10px;
  /* padding: 0px 0px 0px 10px; */
`;

const StyledImageBox = styled.div`
  /* width: 35%; */
  /* height: 70%; */
  border-radius: 5px;
`;

const StyledSingImage = styled.img.attrs<any>((props) => ({
  src: props.src,
}))`
  width: 38vw;
  /* height: 10vh; */
  border-radius: 5px;
`;

const StyledContentContainer = styled.div`
  height: 100%;
  width: 80%;
`;

const StyledTtile = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: 18px;
  color: black;
  width: 100%;
  /* display: flex; */
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
  width: 80px;
  height: 30px;
  /* margin-left: 5vw; */
  /* position: absolute; */
  /* bottom: 6%; */
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
  StyledContentContainer,
  StyledTtile,
  StyledClipButton,
  StyledScore,
  StyledSingImage,
  StyledArtist,
};
