import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const StyledContents = styled(motion.div)`
  font-size: ${(props) => props.theme.fontsize.regular};
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  overflow: scroll;
  position: relative;
  /* border: 1px solid green; */
  height: 94vh;
`;

const StyledContentTopContainer = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const selectcontents = props.selectcontents;
    const id = props.id;
    const MainBackground: any = {
      sing: `
      background-image: url("/contents/mainsing.svg");
      background-size: contain;
    `,
      drama: `
      background-image: url("/contents/maindrama.svg");
      background-size: contain;
    `,
      entertainment: `
      background-image: url("/contents/mainenter.svg");
      background-size: contain;
    `,
    };

    return css`
      height: 22vh;
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding-left: 1rem;
      overflow: hidden;
      ${MainBackground[id]}
    `;
  }}
`;

const StyledMainLogo = styled.img`
  /* border: 1px solid red; */
  position: absolute;
  height: 5vh;
  padding: 0.5rem;
  z-index: 10;
`;

const StyledCotentTopImg = styled.img`
  width: 35vw;
  position: absolute;
  right: 0%;
  top: -1%;
`;

const StyledContentTitle = styled.div`
  font-size: ${(props) => props.theme.fontsize.xxlarge};
`;

const StyledContentText = styled.div`
  ${({ id }) => {
    if (id === "first") {
      return `
      font-size: 24px;
    `;
    } else if (id === "second") {
      return `
        font-size: 16px;
      `;
    }
  }}
`;

const StyledContentsNav = styled.div`
  /* border: 1px solid red; */
  margin: 1vh 0 0 0;
  height: 5vh;
  display: flex;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
`;

const StyledContentsNavButton = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const selectcontents = props.selectcontents;
    const id = props.id;

    return css`
      width: 20vw;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      font-size: ${(props) => props.theme.fontsize.large};
      font-family: ${(props) => props.theme.fonts.boldfont};
      padding-bottom: 0.5rem;
      border-bottom: ${selectcontents === id ? `3px solid black` : null};
    `;
  }}
`;

const StyledContentsBody = styled.div`
  /* border: 1px solid orange; */
  /* overflow-y: scroll; */
  height: 62vh;
`;

export {
  StyledContents,
  StyledContentTopContainer,
  StyledContentTitle,
  StyledContentText,
  StyledContentsNav,
  StyledContentsNavButton,
  StyledContentsBody,
  StyledCotentTopImg,
  StyledMainLogo,
};
