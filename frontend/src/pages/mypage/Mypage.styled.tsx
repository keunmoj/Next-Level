import styled from "styled-components";
import { motion } from "framer-motion";

const StyledMypage = styled(motion.div)``;

const StyledMypageTop = styled.div`
  background-color: #adacac;
  height: 30vh;
`;

const StyledMypageInfo = styled.div`
  border: 1px solid black;
`;

const StyledMypageResult = styled.div`
  border: 1px solid red;
`;

export { StyledMypage, StyledMypageTop, StyledMypageInfo, StyledMypageResult };
