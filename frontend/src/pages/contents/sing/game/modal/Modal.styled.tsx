import styled from "styled-components";
import Modal from "react-modal";

const StyledModalPage = styled(Modal)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
`;

const StyledModalWindow = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const StyledModalbody = styled.div`
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledModalTitle = styled.div`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  text-align: center;
  margin-bottom: 1rem;
`;

const StyledModalContent = styled.div`
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
  background-color: #cc6161;
`;

export {
  StyledModalPage,
  StyledModalWindow,
  StyledModalbody,
  StyledModalTitle,
  StyledModalContent,
  StyledModalButtonContainer,
  StyledModalButton,
};
