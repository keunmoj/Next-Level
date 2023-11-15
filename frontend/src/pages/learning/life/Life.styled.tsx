import styled from "styled-components";

const StyledLearnLife = styled.div`
  padding-bottom: 1vh;
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontsize.regular};
  /* border: 1px solid red; */
  height: 88vh;
  overflow: scroll;
`;

const StyledLearnContainer = styled.div`
  /* border: 1px solid yellow; */
  padding: 1rem 1rem 0rem 1rem;
`;

const StyledLearnMainBox = styled.div.attrs<any>(() => ({}))`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  height: 10vh;

  ${({ id }) => {
    if (id === "chatbot") {
      return `
      border: none;`;
    } else {
      return `
      border : 2px solid black;
      box-shadow: 1px 1px 1px 1px #939393;`;
    }
  }}
`;

const StyledLearnDirectMainBox = styled.div`
  border: 2px solid black;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 1px 1px 1px 1px #939393;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLearnIcon = styled.img.attrs<any>(() => ({}))`
  /* border: 1px solid pink; */
  height: 6vh;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;

const StyledLearnContent = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
`;

const StyledLearnTitle = styled.div`
  /* border: 1px solid red; */
  font-size: ${(props) => props.theme.fontsize.semilarge};
  font-family: ${(props) => props.theme.fonts.boldfont};
`;

const StyledLearnText = styled.div`
  /* border: 1px solid red; */
`;

const StyledLearnButton = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  width: 80vw;
  height: 4vh;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.white};
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
