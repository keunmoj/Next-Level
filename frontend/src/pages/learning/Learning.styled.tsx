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
  font-family: ${(props) => props.theme.fonts.boldfont};
`;

const StyledLearnBody = styled.div`
  border: 1px solid orange;
  overflow-y: scroll;
  height: 85vh;
`;

const StyledLearnContainer = styled.div`
  /* border: 1px solid yellow; */
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
`;

const StyledLearnDirectMainBox = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLearnMainBox = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  height: 100px;
`;

const StyledLearnIcon = styled.img.attrs<any>(() => ({}))`
  border: 1px solid pink;
  height: 65px;
  margin: 0.5rem;
`;

const StyledLearnContent = styled.div`
  /* background-color: aqua; */
`;

const StyledLearnTitle = styled.div`
  border: 1px solid red;
  font-size: 18px;
`;

const StyledLearnText = styled.div`
  border: 1px solid red;
  font-size: 16px;
`;

const StyledLearnButton = styled.div`
  background-color: pink;
  width: 80vw;
  height: 3vh;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
`;

export {
  StyledLearning,
  StyledLearnNav,
  StyledLearnNavButton,
  StyledLearnBody,
  StyledLearnContainer,
  StyledLearnDirectMainBox,
  StyledLearnMainBox,
  StyledLearnIcon,
  StyledLearnContent,
  StyledLearnTitle,
  StyledLearnText,
  StyledLearnButton,
};
