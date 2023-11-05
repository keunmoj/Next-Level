import styled from "styled-components";
const StyledMyLearningComponent = styled.div`
  position: absolute;
  bottom: 6vh;
  height: 45vh;
  width: 100vw;
`;
const StyledMyLearningTitle = styled.div`
  height: 5vh;
  display: flex;
  padding-bottom: 0.5rem;
`;

const StyledMyLearningButton = styled.div.attrs<any>(() => ({}))`
  width: 20vw;
  height: 5vh;
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: ${(props) => props.theme.fontsize.large};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-bottom: ${(props) => props.id === props.state && "3px solid black"};
  padding-bottom: 0.5rem;
`;

export {
  StyledMyLearningComponent,
  StyledMyLearningTitle,
  StyledMyLearningButton,
};
