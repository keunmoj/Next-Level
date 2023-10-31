import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const StyledContents = styled(motion.div)`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.regularfont};
  overflow: scroll;
  /* background-color: #faf6fc; */
`;

const StyledContentTopContainer = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const selectcontents = props.selectcontents;
    const id = props.id;

    return css`
      background-color: aliceblue;
      height: 22vh;
    `;
  }}
`;

const StyledContentTitle = styled.div`
  font-size: large;
`;

const StyledContentsNav = styled.div`
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
      font-size: 20px;
      padding-bottom: 0.5rem;
      /* font-size: ${selectcontents === id ? `22px` : null}; */
      border-bottom: ${selectcontents === id ? `3px solid black` : null};
    `;
  }}
`;

const StyledContentsBody = styled.div`
  /* border: 1px solid orange; */
  /* overflow-y: scroll; */
  height: 64.5vh;
`;

export {
  StyledContents,
  StyledContentTopContainer,
  StyledContentTitle,
  StyledContentsNav,
  StyledContentsNavButton,
  StyledContentsBody,
};
