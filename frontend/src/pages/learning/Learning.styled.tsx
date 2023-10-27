import styled from "styled-components";

const StyledLearning = styled.div`
  /* border: 1px solid red; */
`;

const StyledLearnNav = styled.div`
  /* background-color: aliceblue; */
  display: flex;
  height: 6.5vh;
  border-bottom: 3px solid black;
`;

const StyledLearnNavButton = styled.div`
  /* border: 1px solid blue; */
  width: 20vw;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
`;

const StyledLearnBody = styled.div`
  /* border: 1px solid orange; */
  overflow-y: scroll;
  height: 85vh;
`;

export {
  StyledLearning,
  StyledLearnNav,
  StyledLearnNavButton,
  StyledLearnBody,
};
