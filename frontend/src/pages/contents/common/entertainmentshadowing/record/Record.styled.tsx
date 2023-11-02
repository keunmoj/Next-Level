import styled from "styled-components";

const StyledRecordContainer = styled.div`
  margin-top: 1vh;
  margin-left: auto;
  margin-right: auto;
  width: 95vw;
  height: 32vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: pink;
`;

const StyledScript = styled.div`
  width: 90vw;
  height: 2.5vh;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
