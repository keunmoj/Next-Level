import styled from "styled-components";

const StyledAddInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledAddInformationTitle = styled.div`
  margin: 15px 0px 20px;
  font-size: ${(props) => props.theme.fontsize.xlarge};
  font-family: ${(props) => props.theme.fonts.boldfont};
`;

const StyledAddInformationProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  margin-bottom: 10px;
`;

const StyledAddInformationProfileImg = styled.img.attrs<any>(() => ({}))`
  background-color: white;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

const StyledAddInformationWrapper = styled.div`
  width: 80vw;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 10px;
  display: block;
`;

const StyledAddInformationCodeContainer = styled.div`
  padding-bottom: 25px;
  margin-bottom: 5px;
  height: 70px;
`;

const StyledAddInformationLabel = styled.label.attrs({ htmlFor: "nickName" })`
  font-size: ${(props) => props.theme.fontsize.regular};
  margin-left: 5px;
  font-weight: 600;
`;

interface StyledInputProps {
  $error: boolean;
  $filled: boolean;
}

const StyledAddInformationNickname = styled.input.attrs<StyledInputProps>(
  () => ({
    name: "nickName",
    type: "text",
  })
)`
  display: block;
  width: 100%;
  height: 20px;
  padding: 20px;
  font-size: ${(props) => props.theme.fontsize.regular};

  ${(props) => {
    let borderColor = "#aaa";
    if (props.$error) {
      borderColor = "red";
    } else if (props.$filled) {
      borderColor = "green";
    }

    return `
        border-color:${borderColor};
        box-sizing:border-box;
        outline:none; 
        border-radius:12px; 
        transition:border-radius 250ms ease;
    `;
  }}
`;

const StyledAddInformationSubmitButton = styled.button.attrs({
  type: "submit",
})`
  box-sizing: border-box;
  height: 40px;
  width: 100%;
  font-size: ${(props) => props.theme.fontsize.regular};
  font-family: ${(props) => props.theme.fonts.boldfont};
  border: 1px solid black;
  border-radius: 5px;
  background-color: transparent;
  color: ${(props) => props.theme.colors.black};
  z-index: 10;
  &:disabled {
    color: ${(props) => props.theme.colors.gray};
    font-family: ${(props) => props.theme.fonts.regularfont};
    border: 1px dashed black;
  }
`;

const StyledAddInformationErrorMessage = styled.div`
  padding-top: 5px;
  margin-left: 3px;
  font-size: ${(props) => props.theme.fontsize.small};
  color: red;
`;

export {
  StyledAddInformation,
  StyledAddInformationTitle,
  StyledAddInformationProfileContainer,
  StyledAddInformationProfileImg,
  StyledAddInformationSubmitButton,
  StyledAddInformationCodeContainer,
  StyledAddInformationLabel,
  StyledAddInformationNickname,
  StyledAddInformationWrapper,
  StyledAddInformationErrorMessage,
};
