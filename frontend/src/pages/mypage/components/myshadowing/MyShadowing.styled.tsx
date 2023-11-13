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
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImageBox = styled.div`
  width: 35%;
  height: 70%;
  border-radius: 5px;
`;
const StyledImage = styled.img.attrs<any>((props) => ({
  src: props.src,
}))`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const StyledContentContainer = styled.div`
  width: 52%;
  height: 100%;
  position: relative;
`;
const StyledTtile = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: 18px;
  color: ${(props) => props.theme.colors.black};
  margin-left: 5vw;
  margin-top: 5%;
`;

const StyledClipButton = styled.button`
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  border: none;
  font-size: ${(props) => props.theme.fontsize.xsmall};
  width: 80px;
  height: 30px;
  margin-left: 5vw;
  position: absolute;
  bottom: 6%;
  border-radius: 10px;
`;

const StyledScore = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: ${(props) => props.theme.fontsize.semilarge};
  margin-left: 5vw;
  margin-top: 5%;
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
};
