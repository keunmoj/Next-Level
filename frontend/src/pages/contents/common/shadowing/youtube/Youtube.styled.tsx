import styled from "styled-components";
const StyledSwiperContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledSpeechContainer = styled.div`
  width: 95vw;
  height: 30vh;
  background-color: lightblue;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledSpeech = styled.div`
  font-family: ${(props) => props.theme.fonts.regularfont};
  margin-top: 5px;
`;

export { StyledSwiperContainer, StyledSpeechContainer, StyledSpeech };
