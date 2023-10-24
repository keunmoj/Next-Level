import styled from "styled-components";

const StyledBottomNav = styled.div`
  /* border: 1px solid red; */
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  height: 8vh;
  border-top: 2px solid black;
  display: flex;
  justify-content: space-between;
`;

const StyledBottomNavBox = styled.div`
  /* border: 1px solid blue; */
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBottomNavIcon = styled.img.attrs<any>(() => ({}))`
  height: 5vh;
`;

export { StyledBottomNav, StyledBottomNavBox, StyledBottomNavIcon };
