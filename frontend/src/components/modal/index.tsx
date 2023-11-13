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
  StyledModalArtist,
  StyledModalInputContainer,
  StyledModalInput,
  StyledModalContentsContainer,
  StyledModalTextContainer,
  StyledModalCloseButton,
} from "./Modal.styled";

const Modal = (props: any) => {
  return (
    <StyledModalPage onClick={props.closeModal}>
      <StyledModalWindow onClick={(e: any) => e.stopPropagation()}>
        <StyledModalCloseButton onClick={props.closeModal} id="close">
          {props.closeMent ? props.closeMent : "X"}
        </StyledModalCloseButton>
        <StyledModalbody>
          <StyledModalContentsContainer>
            {props.imgsrc && <StyledModalImage src={props.imgsrc} alt="img" />}
            <StyledModalTextContainer>
              <StyledModalTitle>{props.modalTitle}</StyledModalTitle>
              <StyledModalArtist>{props.modalArtist}</StyledModalArtist>
            </StyledModalTextContainer>
          </StyledModalContentsContainer>
          <StyledModalContent>{props.modalText}</StyledModalContent>
          <StyledModalButtonContainer>
            {props.openPage && (
              <StyledModalButton onClick={props.openPage} id="open">
                {props.completeMent ? props.completeMent : "확인"}
              </StyledModalButton>
            )}
          </StyledModalButtonContainer>
        </StyledModalbody>
      </StyledModalWindow>
    </StyledModalPage>
  );
};

export default Modal;
