import styled from "styled-components";

const StyledMypageEdit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledMypageEditTitle = styled.div`
  margin: 15px 0px 20px;
  font-size: ${(props) => props.theme.fontsize.xlarge};
  font-family: ${(props) => props.theme.fonts.boldfont};
`;

const StyledMypageEditProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  margin-bottom: 10px;
`;

const StyledMypageEditProfileImg = styled.img.attrs<any>(() => ({}))`
  background-color: white;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

const StyledMypageEditWrapper = styled.div`
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

const StyledMypageEditCodeContainer = styled.div`
  padding-bottom: 25px;
  margin-bottom: 5px;
  height: 70px;
`;

const StyledMypageEditLabel = styled.label.attrs({ htmlFor: "nickName" })`
  font-size: ${(props) => props.theme.fontsize.regular};
  margin-left: 5px;
  font-weight: 600;
`;

interface StyledInputProps {
  $error: boolean;
  $filled: boolean;
}

const StyledMypageEditNickname = styled.input.attrs<StyledInputProps>(() => ({
  name: "nickName",
  type: "text",
}))`
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

const StyledMypageEditSubmitButton = styled.button.attrs({
  type: "submit",
})`
  box-sizing: border-box;
  height: 40px;
  width: 100%;
  font-size: ${(props) => props.theme.fontsize.regular};
  font-family: ${(props) => props.theme.fonts.boldfont};
  border: 1px solid black;
  border-radius: 10px;
  background-color: transparent;
  color: ${(props) => props.theme.colors.black};
  z-index: 10;
  &:disabled {
    color: ${(props) => props.theme.colors.gray};
    font-family: ${(props) => props.theme.fonts.regularfont};
    border: 1px dashed black;
  }
`;

const StyledMypageEditErrorMessage = styled.div`
  padding-top: 5px;
  margin-left: 3px;
  font-size: ${(props) => props.theme.fontsize.small};
  color: red;
`;

export {
  StyledMypageEdit,
  StyledMypageEditTitle,
  StyledMypageEditProfileContainer,
  StyledMypageEditProfileImg,
  StyledMypageEditSubmitButton,
  StyledMypageEditCodeContainer,
  StyledMypageEditLabel,
  StyledMypageEditNickname,
  StyledMypageEditWrapper,
  StyledMypageEditErrorMessage,
};
