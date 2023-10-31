import styled, { css } from "styled-components";

const StyledBottomNav = styled.div.attrs<any>(() => ({}))`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  height: 8vh;
  border-top: 2px solid #4a90e2;
  display: flex;
  justify-content: space-between;
`;

const StyledBottomNavBox = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const selectbottomnav = props.selectbottomnav;
    const id = props.id;

    return css`
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: ${selectbottomnav === id ? `1px solid #4A90E2` : null};
    `;
  }}
`;

const StyledBottomNavIcon = styled.img.attrs<any>(() => ({}))`
  height: 5vh;
`;

export { StyledBottomNav, StyledBottomNavBox, StyledBottomNavIcon };
