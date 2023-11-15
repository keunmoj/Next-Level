import styled from "styled-components";
import { motion } from "framer-motion";
const StyledLang = styled.div`
  background-color: gray;
  position: absolute;
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.regularfont};
  /* display: flex; */
  width: 45vw;
  padding: 10px 0px 0px 0px;
`;

const StyledLangTitle = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const StyledLangIcon = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 5px;
  margin-left: 5px;
`;

const StyledLangDropdown = styled.div`
  position: relative;
`;

const StyledLangButton = styled.div`
  background-color: pink;
  padding: 10px;
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.regularfont};
`;

const StyledMotionNav = styled(motion.nav)`
  /* filter: drop-shadow(1px 1px 1px #4700b3); */
  width: 27vw;
  position: absolute;
  right: 1vw;
  top: 1vh;
  z-index: 1;
`;

const StyledMotionButton = styled(motion.button)`
  -webkit-appearance: button;
  background: var(--accent);
  color: var(--background);
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: ${(props) => props.theme.fontsize.regular};
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;
const StyledMotiondiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 0;
  padding-bottom: 50px;
  align-items: center;
`;
const StyledMotionUl = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: var(--accent);
  list-style: none;
  margin: 0;
  padding: 10px;
  background-color: white;
`;
const StyledMotionli = styled(motion.li)`
  color: var(--background);
  display: block;
  list-style: none;
  margin: 0;
  padding: 10px;
  background-color: white;
`;
export {
  StyledLang,
  StyledLangTitle,
  StyledLangIcon,
  StyledLangDropdown,
  StyledLangButton,
  StyledMotionNav,
  StyledMotionButton,
  StyledMotiondiv,
  StyledMotionUl,
  StyledMotionli,
};
