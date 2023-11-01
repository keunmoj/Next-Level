import styled from "styled-components";

const StyledLearnLife = styled.div`
  /* border: 1px solid orange;
  overflow-y: scroll;
  height: 85vh; */
  padding-bottom: 1rem;
  color: ${(props) => props.theme.colors.black};
`;

const StyledLearnContainer = styled.div`
  /* border: 1px solid yellow; */

  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
`;

const StyledLearnMainBox = styled.div.attrs<any>(() => ({}))`
  /* border: 1px solid black; */
  background-color: ${(props) => props.theme.colors.light};
  border-radius: 10px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  height: 100px;

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
  background-color: ${(props) => props.theme.colors.light};
  box-shadow: 1px 1px 1px 1px #939393;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLearnIcon = styled.img.attrs<any>(() => ({}))`
  /* border: 1px solid pink; */
  height: 65px;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;

const StyledLearnContent = styled.div`
  font-family: ${(props) => props.theme.fonts.regularfont};
`;

const StyledLearnTitle = styled.div`
  /* border: 1px solid red; */
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
`;

const StyledLearnText = styled.div`
  /* border: 1px solid red; */
  font-size: 16px;
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
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.semiboldfont};
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
