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
          <StyeldModalTitle>{t("contents.enter.allList")}</StyeldModalTitle>
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
                    {t("contents.enter.clipList")}
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
