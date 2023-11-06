import styled from "styled-components";

const StyledAddInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin: 50px 0px 0px;
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
  font-size: 16px;
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
        font-size:16px; 
        outline:none; 
        border-radius:12px; 
        transition:border-radius 250ms ease;
    `;
  }}
`;

const StyledAddInforamtionSubmitButton = styled.button.attrs({
  type: "submit",
})`
  box-sizing: border-box;
  height: 40px;
  width: 150px;
  font-size: ${(props) => props.theme.fontsize.regular};
  font-weight: bold;
  border: 1px solid black;
  border-radius: 10px;
  background-color: transparent;
  color: ${(props) => props.theme.colors.black};
  z-index: 980;
  &:disabled {
    color: ${(props) => props.theme.colors.gray};
    border: 1px dashed black;
  }
`;

const StyledAddInformationErrorMessage = styled.div`
  padding-top: 5px;
  margin-left: 3px;
  font-size: 13px;
  color: red;
`;

export {
  StyledAddInformation,
  StyledAddInformationProfileContainer,
  StyledAddInformationProfileImg,
  StyledAddInforamtionSubmitButton,
  StyledAddInformationCodeContainer,
  StyledAddInformationLabel,
  StyledAddInformationNickname,
  StyledAddInformationWrapper,
  StyledAddInformationErrorMessage,
};
