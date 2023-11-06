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
import { S3_ADDRESS } from "@/api/api";

const ListModal = (props: any) => {
  const navigate = useNavigate();
  // const S3_ADDRESS = import.meta.env.VITE_S3_URL;
  console.log(props.entertainmentList);
  return (
    <StyeldListModalPage>
      <StyledListModalWindow>
        <StyledListModalTopContainer>
          <StyeldModalTitle>전체 예능 목록</StyeldModalTitle>
          <StyledCloseButtonBox onClick={() => props.setIsOpen(false)}>
            <StyledClossButton></StyledClossButton>
          </StyledCloseButtonBox>
        </StyledListModalTopContainer>
        <StyledCardContainer>
          {props.entertainmentList?.map((enter: any) => {
            return (
              <StyledCardBox key={enter.id}>
                <StyledImageBox>
                  <StyledImage src={S3_ADDRESS + enter.image}></StyledImage>
                </StyledImageBox>

                <StyledContentContainer>
                  <StyledTtile>{enter.title}</StyledTtile>
                  <StyledClipButton
                    onClick={() =>
                      navigate(`/entertainment/list/${enter.id}`, {
                        state: { mainImage: enter.image, title: enter.title },
                      })
                    }
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
