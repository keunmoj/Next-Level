import { useState } from 'react';
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
} from './Modal.styled';

const Modal = (props: any) => {
  return (
    <StyledModalPage onClick={props.closeModal}>
      <StyledModalWindow onClick={(e: any) => e.stopPropagation()}>
        <StyledModalbody>
          {props.imgsrc && <StyledModalImage src={props.imgsrc} alt="img" />}

          <StyledModalTitle>{props.modalTitle}</StyledModalTitle>
          <StyledModalArtist>{props.modalArtist}</StyledModalArtist>
          <StyledModalContent>{props.modalText}</StyledModalContent>
        </StyledModalbody>
        <StyledModalButtonContainer>
          {props.openPage && (
            <StyledModalButton onClick={props.openPage} id="open">
              {props.completeMent ? props.completeMent : '열기'}
            </StyledModalButton>
          )}
          <StyledModalButton onClick={props.closeModal} id="close">
            {props.closeMent ? props.closeMent : '닫기'}
          </StyledModalButton>
        </StyledModalButtonContainer>
      </StyledModalWindow>
    </StyledModalPage>
  );
};

export default Modal;
