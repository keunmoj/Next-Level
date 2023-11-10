import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const StyledLearning = styled(motion.div)`
  font-size: ${(props) => props.theme.fontsize.regular};
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  overflow: scroll;
  position: relative;
  /* border: 1px solid green; */
  height: 94vh;
`;

const StyledLearnNav = styled.div`
  margin: 1rem 0rem 0rem 0rem;
  height: 5vh;
  display: flex;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
`;

const StyledLearnNavButton = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const selectlearn = props.selectlearn;
    const id = props.id;

    return css`
      width: 20vw;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      font-size: ${(props) => props.theme.fontsize.large};
      padding-bottom: 0.5rem;
      border-bottom: ${selectlearn === id ? `3px solid black` : null};
    `;
  }}
`;

const StyledLearnBody = styled.div`
  height: 62vh;
`;

export {
  StyledLearning,
  StyledLearnNav,
  StyledLearnNavButton,
  StyledLearnBody,
};
