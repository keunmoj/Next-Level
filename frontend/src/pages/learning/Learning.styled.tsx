import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const StyledLearning = styled(motion.div)`
  /* border: 1px solid red; */
  /* background-color: #fcf6f5; */
`;

const StyledLearnNav = styled.div`
  /* background-color: #ffffff; */
  display: flex;
  height: 6.5vh;
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
      font-size: 20px;
      padding-bottom: 0.5rem;
      border-bottom: ${selectlearn === id ? `3px solid black` : null};
    `;
  }}
`;

const StyledLearnBody = styled.div`
  /* border: 1px solid orange; */
  overflow-y: scroll;
  height: 85vh;
`;

export {
  StyledLearning,
  StyledLearnNav,
  StyledLearnNavButton,
  StyledLearnBody,
};
