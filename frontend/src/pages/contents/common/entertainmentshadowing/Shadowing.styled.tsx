import styled from "styled-components";
const StyledContentPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

const StyledButtonContainer = styled.div`
  width: 100vw;
  height: 6vh;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledButton = styled.button.attrs<any>(() => ({}))`
  width: 90vw;
  height: 4.5vh;
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: ${(props) => props.theme.fontsize.large};
  border-radius: 15px;
  border: none;
  background-color: ${(props) => props.theme.colors.main};
`;
export { StyledContentPage, StyledButtonContainer, StyledButton };
