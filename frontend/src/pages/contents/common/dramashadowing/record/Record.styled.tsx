import styled from "styled-components";

const StyledRecordContainer = styled.div`
  margin-top: 1vh;
  margin-left: auto;
  margin-right: auto;
  width: 95vw;
  height: 48vh;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
`;

const StyledScript = styled.div`
  width: 80vw;
  height: 7vh;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: 16px;
  word-break: keep-all;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButtonContainer = styled.div`
  margin-top: 2vh;
  width: 90vw;
  height: 5vh;
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

const StyledPagenation = styled.div`
  font-family: ${(props) => props.theme.fonts.regularfont};
  font-size: 12px;
  margin-top: auto;
  margin-bottom: auto;
`;
export {
  StyledRecordContainer,
  StyledScript,
  StyledButtonContainer,
  StyledIconContainer,
  StyledIcon,
  StyledPagenation,
};
