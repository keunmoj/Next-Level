import { useState } from "react";
import {
  StyledModalPage,
  StyledModalWindow,
  StyledModalbody,
  StyledModalTitle,
  StyledModalContent,
  StyledModalButtonContainer,
  StyledModalButton,
  StyledModalImage,
} from "./Modal.styled";

const Modal = (props: any) => {
  return (
    <StyledModalPage onClick={props.closeModal}>
      <StyledModalWindow>
        <StyledModalbody>
          <StyledModalImage src={props.imgsrc} alt="img" />
          <StyledModalTitle>{props.modalTitle}</StyledModalTitle>
          <StyledModalContent>{props.modalText}</StyledModalContent>
        </StyledModalbody>
        <StyledModalButtonContainer>
          <StyledModalButton onClick={props.openPage} id="open">
            열기
          </StyledModalButton>
          <StyledModalButton onClick={props.closeModal} id="close">
            닫기
          </StyledModalButton>
        </StyledModalButtonContainer>
      </StyledModalWindow>
    </StyledModalPage>
  );
};

export default Modal;
