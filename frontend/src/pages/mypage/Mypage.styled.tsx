import styled from "styled-components";
import { motion } from "framer-motion";

const StyledMypage = styled(motion.div)`
  position: relative;
  height: 100vh;
`;

const StyledMypageTop = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  height: 30vh;
`;

const StyledMypageInfo = styled.div``;

const StyledMypageResult = styled.div``;

export { StyledMypage, StyledMypageTop, StyledMypageInfo, StyledMypageResult };
