import styled from "styled-components";

const StyledModalPage = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00000066;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
`;

const StyledModalWindow = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 70%;
  /* height: 30%; */
  /* padding: 1rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const StyledModalbody = styled.div`
  /* border: 1px solid red; */
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 15vh; */
`;

const StyledModalImage = styled.img`
  /* border: 1px solid blue; */
  height: 15vh;
  width: 37.5vw;
`;

const StyledModalTitle = styled.div`
  /* border: 1px solid black; */
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  text-align: center;
  margin-top: 5px;
`;

const StyledModalArtist = styled.div`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.regularfont};
  text-align: center;
  margin-bottom: 10px;
`;

const StyledModalContent = styled.div`
  /* border: 1px solid blue; */
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.regularfont};
  text-align: center;
`;

const StyledModalButtonContainer = styled.div`
  background-color: beige;
  height: 6vh;
  display: flex;
`;

const StyledModalButton = styled.div`
  width: 100%;
  color: white;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ id }) => {
    if (id === "open") {
      return `
      background-color: #cc6161;
    `;
    } else if (id === "close") {
      return `
        background-color: #5454a1;
      `;
    }
  }}
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
};
