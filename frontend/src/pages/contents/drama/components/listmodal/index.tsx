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
import { useTranslation } from "react-i18next";
const ListModal = (props: any) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <StyeldListModalPage>
      <StyledListModalWindow>
        <StyledListModalTopContainer>
          <StyeldModalTitle>{t("contents.drama.allList")}</StyeldModalTitle>
          <StyledCloseButtonBox onClick={() => props.setIsOpen(false)}>
            <StyledClossButton></StyledClossButton>
          </StyledCloseButtonBox>
        </StyledListModalTopContainer>
        <StyledCardContainer>
          {props.DramaList.map((drama: any) => {
            return (
              <StyledCardBox key={drama.id}>
                <StyledImageBox>
                  <StyledImage src={S3_ADDRESS + drama.image}></StyledImage>
                </StyledImageBox>
                <StyledContentContainer>
                  <StyledTtile>{drama.title}</StyledTtile>
                  <StyledClipButton
                    onClick={() =>
                      navigate(`/drama/list/${drama.id}`, {
                        state: { mainImage: drama.image, title: drama.title },
                      })
                    }
                  >
                    {t("contents.drama.clipList")}
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
