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
  /* background-color: ${(props) => props.theme.colors.white}; */
  border-radius: 5px;
  width: 70%;
  /* height: 30%; */
  /* padding: 1rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
`;

const StyledModalbody = styled.div`
  /* border: 1px solid red; */
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* height: 12vh; */
`;

const StyledModalContentsContainer = styled.div`
  display: flex;
  /* border: 1px solid red; */
  margin-bottom: 10px;
  margin-top: 10px;
`;

const StyledModalTextContainer = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  /* padding-left: 10px; */
`;

const StyledModalImage = styled.img`
  /* border: 1px solid blue; */
  width: 20vw;
  height: 9vh;
  object-fit: contain;
  border-radius: 5px;
`;

const StyledModalTitle = styled.div`
  /* border: 1px solid black; */
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  /* text-align: center; */
  margin-top: 5px;
`;

const StyledModalArtist = styled.div`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.regularfont};
  /* text-align: center; */
  margin-bottom: 10px;
`;

const StyledModalContent = styled.div`
  /* border: 1px solid blue; */
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.regularfont};
  text-align: center;
`;

const StyledModalButtonContainer = styled.div`
  /* background-color: beige; */
  /* height: 4vh; */
  /* padding-top: 10px; */
  display: flex;
  justify-content: center;
`;

const StyledModalCloseButton = styled.div`
  /* border: 1px solid red; */
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
  /* margin-bottom: 1vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.main};
  /* ${({ id }) => {
    if (id === "open") {
      return `
      background-color: #5454a1;
    `;
    } else if (id === "close") {
      return `
        background-color: #5454a1;
      `;
    }
  }} */
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
