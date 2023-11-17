import styled from "styled-components";

const StyledLanding = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const StyledLandingBox = styled.div`
  justify-content: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  margin-left: 30px;
`;

const StyledLandingIcon = styled.img.attrs<any>(() => ({}))`
  width: 250px;
`;

export { StyledLanding, StyledLandingBox, StyledLandingIcon };
