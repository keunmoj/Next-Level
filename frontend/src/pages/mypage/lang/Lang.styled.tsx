import styled from "styled-components";

const StyledLang = styled.div`
  background-color: gray;
  position: absolute;
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.regularfont};
  /* display: flex; */
  width: 45vw;
  padding: 10px 0px 0px 0px;
`;

const StyledLangTitle = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const StyledLangIcon = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 5px;
  margin-left: 5px;
`;

const StyledLangDropdown = styled.div`
  position: relative;
`;

const StyledLangButton = styled.div`
  background-color: pink;
  padding: 10px;
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.regularfont};
`;

export {
  StyledLang,
  StyledLangTitle,
  StyledLangIcon,
  StyledLangDropdown,
  StyledLangButton,
};
