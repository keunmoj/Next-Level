import styled from "styled-components";

const StyledAiList = styled.div``;

const StyledAiContainer = styled.div`
  border: 1px solid yellow;
  padding: 1rem;
`;

const StyledAiDateBox = styled.div`
  border: 1px solid red;
`;

const StyledAiDateText = styled.div`
  border: 1px solid pink;
`;

const StyledAiBox = styled.div`
  border: 1px solid black;
  margin-top: 1rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`;

const StyledAiIcon = styled.img.attrs<any>(() => ({}))`
  border: 1px solid pink;
  height: 65px;
`;

const StyledAiContent = styled.div`
  border: 1px solid aqua;
  width: 50vw;
`;

const StyledAiTitle = styled.div`
  border: 1px solid red;
  font-size: 18px;
`;

const StyledAiText = styled.div`
  border: 1px solid red;
  font-size: 16px;
`;

const StyledAiScore = styled.div`
  border: 1px solid aquamarine;
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  StyledAiList,
  StyledAiContainer,
  StyledAiDateBox,
  StyledAiDateText,
  StyledAiBox,
  StyledAiIcon,
  StyledAiContent,
  StyledAiTitle,
  StyledAiText,
  StyledAiScore,
};
