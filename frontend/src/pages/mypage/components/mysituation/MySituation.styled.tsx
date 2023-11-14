import styled from "styled-components";

const StyledClipContainer = styled.div`
  width: 95vw;
  overflow: scroll;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-family: ${(props) => props.theme.fonts.regularfont};
`;

const StyledClipBox = styled.div`
  border-radius: 5px;
  display: flex;
  align-items: center;
  border: 2px solid ${(props) => props.theme.colors.gray};
  width: 30vw;
  height: 30vw;
`;

const StyledImageBox = styled.div`
  /* width: 100%; */
  border-radius: 3px;
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
`;

const StyledImage = styled.img.attrs<any>((props) => ({
  src: props.src,
}))`
  height: 30px;
  margin-right: 5px;
`;

const StyledContentContainer = styled.div`
  /* width: 50vw; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  /* border: 1px solid green; */
  margin-left: 10px;
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
};
