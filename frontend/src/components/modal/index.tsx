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
  StyledModalInputContainer,
  StyledModalInput,
} from "./Modal.styled";

const Modal = (props: any) => {
  return (
    <StyledModalPage onClick={props.closeModal}>
      <StyledModalWindow onClick={(e: any) => e.stopPropagation()}>
        <StyledModalbody>
          {props.imgsrc && <StyledModalImage src={props.imgsrc} alt="img" />}

          <StyledModalTitle>{props.modalTitle}</StyledModalTitle>
          <StyledModalContent>{props.modalText}</StyledModalContent>
        </StyledModalbody>
        <StyledModalButtonContainer>
          <StyledModalButton onClick={props.openPage} id="open">
            {props.completeMent ? props.completeMent : "열기"}
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
