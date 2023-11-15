import styled from "styled-components";

const StyeldListModalPage = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #00000066; */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  position: fixed;
  bottom: 0;
  left: 0;
`;
const StyledListModalWindow = styled.div`
  background-color: white;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  width: 100vw;
  height: 60vh;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  position: absolute;
  bottom: 0;
  border-bottom: 2px solid ${(props) => props.theme.colors.black};
`;

const StyledListModalTopContainer = styled.div`
  width: 100vw;
  height: 6vh;
  border-bottom: 2px solid ${(props) => props.theme.colors.black};
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  z-index: 1;
`;

const StyeldModalTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: 18px;
  color: ${(props) => props.theme.colors.black};
  margin-left: 5vw;
`;

const StyledCloseButtonBox = styled.div`
  margin-right: 5vw;
  margin-left: auto;
  width: 5vw;
  height: 5vw;
`;

const StyledClossButton = styled.img.attrs<any>(() => ({
  src: "XButton.png",
}))`
  width: 100%;
  height: 100%;
`;

const StyledCardContainer = styled.div`
  position: absolute;
  top: 6vh;
  overflow: scroll;
  height: 50vh;
  width: 96vw;
  padding-bottom: 1%;
  margin: 2vh 2vw;
`;
const StyledCardBox = styled.div`
  height: 12vh;
  width: 90vw;
  background-color: ${(props) => props.theme.colors.white};
  margin-bottom: 2vh;
  margin-left: auto;
  margin-right: auto;
  padding: 2%;
  display: flex;
  align-items: center;
`;
const StyledImageBox = styled.div`
  width: 45%;
  height: 90%;
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
  width: 55%;
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
  font-size: ${(props) => props.theme.fontsize.regular};
  width: 100px;
  height: 35px;
  margin-left: 5vw;
  position: absolute;
  bottom: 6%;
  border-radius: 5px;
`;
export {
  StyeldListModalPage,
  StyledListModalWindow,
  StyledListModalTopContainer,
  StyeldModalTitle,
  StyledCloseButtonBox,
  StyledClossButton,
  StyledCardContainer,
  StyledCardBox,
  StyledImageBox,
  StyledImage,
  StyledContentContainer,
  StyledTtile,
  StyledClipButton,
};
