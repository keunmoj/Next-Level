import styled, { css } from "styled-components";

const StyledContents = styled.div`
  /* border: 1px solid red; */
  /* background-color: #f9f8f5; */
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.regularfont};
`;

const StyledContentsNav = styled.div`
  /* background-color: aliceblue; */
  height: 6.5vh;
  display: flex;
  border-bottom: 3px solid black;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
`;

const StyledContentsNavButton = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const selectContents = props.selectContents;
    const id = props.id;

    return css`
      width: 20vw;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      font-size: 20px;
      font-size: ${selectContents === id ? `22px` : null};
    `;
  }}
`;

const StyledContentsBody = styled.div`
  /* border: 1px solid orange; */
  overflow-y: scroll;
  height: 85vh;
`;

export {
  StyledContents,
  StyledContentsNav,
  StyledContentsNavButton,
  StyledContentsBody,
};
