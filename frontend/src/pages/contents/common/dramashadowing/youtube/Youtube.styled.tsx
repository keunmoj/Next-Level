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
  height: 17vh;
  background-color: ${(props) => props.theme.colors.white};
  margin-left: auto;
  margin-right: auto;
  margin-top: 1vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  position: relative;
`;

const StyledSpeechBox = styled.div`
  position: absolute;
  top: 4vh;
`;

const StyledSpeech = styled.div`
  width: 80vw;
  font-family: ${(props) => props.theme.fonts.regularfont};
  font-size: 16px;
  margin-top: 5px;
  word-break: keep-all;
  text-align: center;
  margin: 3% 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.light};
  padding-bottom: 1vh;
  /* border-radius: 10px; */
`;

const StyledSpeechTitle = styled.div`
  width: 82vw;
  height: 3vh;
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 20px;
  display: flex;
  justify-content: center;
  padding-top: 1vh;
  position: fixed;
  background-color: ${(props) => props.theme.colors.white};
  z-index: 1;
`;
export {
  StyledYoutubeContainer,
  StyledSwiperContainer,
  StyledSpeechContainer,
  StyledSpeech,
  StyledSpeechBox,
  StyledSpeechTitle,
};
