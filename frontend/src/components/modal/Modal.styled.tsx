import styled from "styled-components";

const StyledModalPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000066;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const StyledModalWindow = styled.div`
  background-color: white;
  border-radius: 5px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
`;

const StyledModalbody = styled.div`
  margin: 8vw 8vw 3vw 8vw;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
`;

const StyledModalContentsContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`;

const StyledModalTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const StyledModalImage = styled.img`
  width: 20vw;
  height: 9vh;
  object-fit: contain;
  border-radius: 5px;
`;

const StyledModalTitle = styled.div`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  margin-top: 5px;
`;

const StyledModalArtist = styled.div`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.regularfont};
  margin-bottom: 10px;
`;

const StyledModalContent = styled.div`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.regularfont};
  text-align: center;
`;

const StyledModalButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledModalCloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
`;

const StyledModalButton = styled.div`
  width: 55%;
  height: 40px;
  color: white;
  font-size: ${(props) => props.theme.fontsize.regular};
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  background-color: white;
  border-radius: 5px;
  margin-top: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.main};
`;

const StyledModalInputContainer = styled.form``;

const StyledModalInput = styled.input``;

export {
  StyledModalPage,
  StyledModalWindow,
  StyledModalbody,
  StyledModalImage,
  StyledModalTitle,
  StyledModalArtist,
  StyledModalContent,
  StyledModalButtonContainer,
  StyledModalButton,
  StyledModalInputContainer,
  StyledModalInput,
  StyledModalContentsContainer,
  StyledModalTextContainer,
  StyledModalCloseButton,
};
