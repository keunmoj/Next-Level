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
} from "@/components/modal/Modal.styled";

const ResultModal = (props: any) => {
  return (
    <StyledModalPage onClick={props.closeModal}>
      <StyledModalWindow onClick={(e: any) => e.stopPropagation()}>
        <StyledModalbody>
          <StyledModalImage src={props.imgsrc} alt="img" />
          <StyledModalTitle>{props.modalTitle}</StyledModalTitle>
          <StyledModalContent>{props.modalText}</StyledModalContent>
        </StyledModalbody>
        <StyledModalButtonContainer>
          <StyledModalButton onClick={props.openPage} id="open">
            {props.OpenButton}
          </StyledModalButton>
          <StyledModalButton onClick={props.closeModal} id="close">
            {props.closeButton}
          </StyledModalButton>
        </StyledModalButtonContainer>
      </StyledModalWindow>
    </StyledModalPage>
  );
};

export default ResultModal;
