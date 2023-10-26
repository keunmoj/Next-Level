import styled from "styled-components";

const StyledLearning = styled.div`
  border: 1px solid red;
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
`;

const StyledLearnBody = styled.div`
  border: 1px solid orange;
  overflow-y: scroll;
  height: 85vh;
`;

const StyledLearnContainer = styled.div`
  border: 1px solid yellow;
  padding: 1rem;
`;

const StyledLearnMainBox = styled.div`
  border: 1px solid black;
  display: flex;
`;

const StyledLearnIcon = styled.img.attrs<any>(() => ({}))`
  border: 1px solid pink;
`;

const StyledLearnContent = styled.div`
  background-color: aqua;
`;

const StyledLearnTitle = styled.div`
  border: 1px solid red;
`;

const StyledLearnText = styled.div`
  border: 1px solid red;
`;

export {
  StyledLearning,
  StyledLearnNav,
  StyledLearnNavButton,
  StyledLearnBody,
  StyledLearnContainer,
  StyledLearnMainBox,
  StyledLearnIcon,
  StyledLearnContent,
  StyledLearnTitle,
  StyledLearnText,
};
