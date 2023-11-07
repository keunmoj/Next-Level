import styled, { css } from "styled-components";
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
  ${(props) => {
    const use = props.use;
    const main = props.theme.colors.main;
    const light = props.theme.colors.light;
    const useStyle: any = {
      close: `background-color:${light}`,
      submit: `background-color:${main}`,
    };
    return css`
      width: 40vw;
      height: 4.5vh;
      font-family: ${(props) => props.theme.fonts.boldfont};
      font-size: ${(props) => props.theme.fontsize.large};
      ${useStyle[use]};
      border-radius: 15px;
      border: none;
    `;
  }}
`;
export { StyledContentPage, StyledButtonContainer, StyledButton };
