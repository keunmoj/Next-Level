import styled from "styled-components";

const StyledBottomNav = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
`;

const StyledBottomNavBox = styled.div`
  border: 1px solid blue;
  width: 25%;
  display: flex;
  justify-content: center;
`;

const StyledBottomNavIcon = styled.img.attrs<any>(() => ({}))`
  height: 5vh;
  margin: 1vw;
`;

export { StyledBottomNav, StyledBottomNavBox, StyledBottomNavIcon };
