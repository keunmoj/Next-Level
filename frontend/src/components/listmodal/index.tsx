import React from "react";
import {
  StyeldListModalPage,
  StyledListModalWindow,
  StyledListModalTopContainer,
  StyeldModalTitle,
  StyledCloseButtonBox,
  StyledClossButton,
  StyledCardContainer,
  StyledCardBox,
  StyledImageBox,
  StyledImage,
  StyledContentContainer,
  StyledTtile,
  StyledClipButton,
} from "./ListModal.styled";

const ListModal = (props: any) => {
  return (
    <StyeldListModalPage>
      <StyledListModalWindow>
        <StyledListModalTopContainer>
          <StyeldModalTitle>전체 예능 목록</StyeldModalTitle>
          <StyledCloseButtonBox onClick={() => props.setOpenModal(false)}>
            <StyledClossButton></StyledClossButton>
          </StyledCloseButtonBox>
        </StyledListModalTopContainer>
        <StyledCardContainer>
          <StyledCardBox>
            <StyledImageBox>
              <StyledImage></StyledImage>
            </StyledImageBox>
            <StyledContentContainer>
              <StyledTtile>무빙</StyledTtile>
              <StyledClipButton>클립 목록</StyledClipButton>
            </StyledContentContainer>
          </StyledCardBox>
          <StyledCardBox></StyledCardBox>
          <StyledCardBox></StyledCardBox>
          <StyledCardBox></StyledCardBox>
          <StyledCardBox></StyledCardBox>
        </StyledCardContainer>
      </StyledListModalWindow>
    </StyeldListModalPage>
  );
};

export default ListModal;
