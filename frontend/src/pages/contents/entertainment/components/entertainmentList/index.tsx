import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  StyledListPage,
  StyledListContainer,
  StyledMainImageContainer,
  StyledMainImage,
  StyledTitle,
  StyledClipContainer,
  StyledClipBox,
  StyledImageBox,
  StyledImage,
  StyledContentContainer,
  StyledTtile,
  StyledClipButton,
  StyledBackImgae,
} from "./EntertainmentList.styled";
import { S3_ADDRESS } from "@/api/api";
import { useEntertainmentClipListGetHook } from "@/hooks/entertainment/useEntertainmentClipListGetHook";
import { useTranslation } from "react-i18next";
const DramaList = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { clipList, getEntertainmentClipList } =
    useEntertainmentClipListGetHook();
  const location = useLocation();
  useEffect(() => {
    getEntertainmentClipList(id);
  }, []);

  return (
    <StyledListPage>
      <StyledBackImgae
        src="/sing/back.png"
        onClick={() => navigate(-1)}
      ></StyledBackImgae>
      <StyledListContainer>
        <StyledMainImageContainer>
          <StyledMainImage
            src={S3_ADDRESS + location.state.mainImage}
          ></StyledMainImage>
          <StyledTitle>{location.state.title}</StyledTitle>
        </StyledMainImageContainer>
        <StyledClipContainer>
          {clipList?.map((clip: any) => {
            return (
              <StyledClipBox
                key={clip.id}
                onClick={() => navigate(`/entertainment/shadowing/${clip.id}`)}
              >
                <StyledImageBox>
                  <StyledImage src={S3_ADDRESS + clip.image}></StyledImage>
                </StyledImageBox>
                <StyledContentContainer>
                  <StyledTtile>{clip.title}</StyledTtile>
                  <StyledClipButton>
                    {t("contents.enter.clipButton")}
                  </StyledClipButton>
                </StyledContentContainer>
              </StyledClipBox>
            );
          })}
        </StyledClipContainer>
      </StyledListContainer>
    </StyledListPage>
  );
};

export default DramaList;
