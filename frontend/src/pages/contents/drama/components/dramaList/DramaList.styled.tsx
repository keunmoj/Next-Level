import styled from "styled-components";

const StyledListPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const StyledListContainer = styled.div`
  width: 90vw;
  height: 80vh;
  background-color: ${(props) => props.theme.colors.white};
  position: absolute;
  bottom: 6vh;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const StyledMainImageContainer = styled.div`
  width: 90vw;
  height: 13vh;
  display: flex;
  justify-content: center;
  position: relative;
`;

const StyledMainImage = styled.img`
  width: 50vw;
  height: 100%;
  border-radius: 10px;
  transform: translateY(-50%);
`;

const StyledTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: ${(props) => props.theme.fontsize.xlarge};
  position: absolute;
  bottom: 15%;
`;

const StyledClipContainer = styled.div`
  width: 90vw;
  height: 67vh;
  overflow: scroll;
`;

const StyledClipBox = styled.div`
  height: 12vh;
  width: 90%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1vh;
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

const StyledBackImgae = styled.img`
  position: absolute;
  left: 3vw;
  top: 1.5vh;
  width: 24px;
  height: 24px;
`;
export {
  StyledListPage,
  StyledListContainer,
  StyledMainImageContainer,
  StyledMainImage,
  StyledTitle,
  StyledClipContainer,
  StyledClipBox,
  StyledImageBox,
  StyledImage,
  StyledContentContainer,
  StyledTtile,
  StyledClipButton,
  StyledBackImgae,
};
