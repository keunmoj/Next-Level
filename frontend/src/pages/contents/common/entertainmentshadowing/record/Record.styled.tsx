import styled from "styled-components";

const StyledRecordContainer = styled.div`
  margin-top: 20px;
  width: 95vw;
  height: 34vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: pink;
`;

const StyledScript = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const StyledIconContainer = styled.div`
  width: 48px;
  height: 48px;
`;
const StyledIcon = styled.img.attrs<any>((props) => ({
  src: props.src,
}))`
  width: 100%;
  height: 100%;
`;

export {
  StyledRecordContainer,
  StyledScript,
  StyledButtonContainer,
  StyledIconContainer,
  StyledIcon,
};
