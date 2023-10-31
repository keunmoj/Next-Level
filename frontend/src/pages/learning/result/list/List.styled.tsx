import styled from "styled-components";

const StyledAiList = styled.div`
  font-family: ${(props) => props.theme.fonts.regularfont};
  font-size: 16px;
  /* padding-bottom: 1rem; */
`;

const StyledAiContainer = styled.div`
  border: 1px solid yellow;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
`;

const StyledAiDateBox = styled.div`
  /* border: 1px solid red; */
  margin-top: 1rem;
`;

const StyledAiDateText = styled.div`
  /* border: 1px solid pink; */
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  margin-bottom: 1rem;
`;

const StyledAiBox = styled.div`
  background-color: #fcf6f5;
  border-radius: 10px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  height: 100px;
  border: 2px solid black;
  box-shadow: 1px 1px 1px 1px #939393;
  margin-bottom: 1rem;
`;

const StyledAiIcon = styled.img.attrs<any>(() => ({}))`
  /* border: 1px solid pink; */
  height: 65px;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;

const StyledAiContent = styled.div`
  /* border: 1px solid aqua; */
  width: 50vw;
`;

const StyledAiTitle = styled.div`
  /* border: 1px solid red; */
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
`;

const StyledAiText = styled.div`
  /* border: 1px solid red; */
`;

const StyledAiScore = styled.div`
  /* border: 1px solid aquamarine; */
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  color: #ce3b3b;
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
