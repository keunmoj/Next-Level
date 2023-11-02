import React, { useEffect } from "react";
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
import { useNavigate } from "react-router-dom";

const ListModal = (props: any) => {
  const navigate = useNavigate();
  return (
    <StyeldListModalPage>
      <StyledListModalWindow>
        <StyledListModalTopContainer>
          <StyeldModalTitle>전체 드라마 목록</StyeldModalTitle>
          <StyledCloseButtonBox onClick={() => props.setIsOpen(false)}>
            <StyledClossButton></StyledClossButton>
          </StyledCloseButtonBox>
        </StyledListModalTopContainer>
        <StyledCardContainer>
          {props.DramaList.map((drama: any) => {
            return (
              <StyledCardBox key={drama.id}>
                <StyledImageBox>
                  <StyledImage></StyledImage>
                </StyledImageBox>
                <StyledContentContainer>
                  <StyledTtile>{drama.title}</StyledTtile>
                  <StyledClipButton
                    onClick={() => navigate(`/drama/list/${drama.id}`)}
                  >
                    클립 목록
                  </StyledClipButton>
                </StyledContentContainer>
              </StyledCardBox>
            );
          })}
        </StyledCardContainer>
      </StyledListModalWindow>
    </StyeldListModalPage>
  );
};

export default ListModal;
