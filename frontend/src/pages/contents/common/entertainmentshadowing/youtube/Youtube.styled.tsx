import styled from "styled-components";

const StyledYoutubeContainer = styled.div`
  width: 100vw;
  height: 26vh;
`;

const StyledSwiperContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledSpeechContainer = styled.div`
  width: 95vw;
  height: 33vh;
  background-color: ${(props) => props.theme.colors.white};
  margin-left: auto;
  margin-right: auto;
  margin-top: 1vh;
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

export {
  StyledYoutubeContainer,
  StyledSwiperContainer,
  StyledSpeechContainer,
  StyledSpeech,
};
