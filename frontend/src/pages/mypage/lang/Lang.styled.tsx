import styled from "styled-components";

const StyledLang = styled.div`
  background-color: beige;
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.regularfont};
`;

const StyledLangButton = styled.div`
  background-color: pink;
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.regularfont};
`;

export { StyledLang, StyledLangButton };
