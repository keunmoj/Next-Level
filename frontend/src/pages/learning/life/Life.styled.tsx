import styled from "styled-components";

const StyledLearnLife = styled.div`
  /* border: 1px solid orange;
  overflow-y: scroll;
  height: 85vh; */
  /* padding: 1rem; */
`;

const StyledLearnContainer = styled.div`
  /* border: 1px solid yellow; */
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
`;

const StyledLearnMainBox = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  height: 100px;
  /* margin: 1rem; */
`;

const StyledLearnDirectMainBox = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  StyledLearnLife,
  StyledLearnContainer,
  StyledLearnDirectMainBox,
  StyledLearnMainBox,
  StyledLearnIcon,
  StyledLearnContent,
  StyledLearnTitle,
  StyledLearnText,
  StyledLearnButton,
};
