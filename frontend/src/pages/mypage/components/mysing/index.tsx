import { useSingResultGetHook } from "@/hooks/mypage/useSingResultGetHook";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledClipBox,
  StyledClipContainer,
  StyledImageBox,
  StyledContentContainer,
  StyledTtile,
  StyledClipButton,
  StyledScore,
  StyledSingImage,
  StyledArtist,
} from "./MySing.styled";
import { S3_ADDRESS } from "@/api/api";
import { useTranslation } from "react-i18next";
const MySing = (props: any) => {
  const { t } = useTranslation();
  const { result, getSingResult } = useSingResultGetHook();
  const navigate = useNavigate();
  useEffect(() => {
    getSingResult();
  }, []);
  const handleModal = (clip: any) => {
    props.openModal();
    props.setMedia({
      id: clip.id,
      url: clip.image,
      title: clip.title,
      artist: clip.artist,
    });
  };

  return (
    <StyledClipContainer>
      {result?.map((clip: any) => {
        return (
          <StyledClipBox key={clip.id} onClick={() => handleModal(clip)}>
            <StyledImageBox>
              <StyledSingImage src={S3_ADDRESS + clip.image} />
              <StyledTtile>
                {clip.title} - {clip.artist}
              </StyledTtile>
              <StyledScore>{clip.score}/30점🎉</StyledScore>
            </StyledImageBox>
            {/* <StyledContentContainer>
              <StyledTtile>
                {clip.title} - {clip.artist}
              </StyledTtile>
              <StyledArtist>{clip.artist}</StyledArtist>
              <StyledScore>{clip.score}/30점🎉</StyledScore>
              <StyledClipButton>{t("mypage.learn")}</StyledClipButton>
            </StyledContentContainer> */}
          </StyledClipBox>
        );
      })}
    </StyledClipContainer>
  );
};

export default MySing;
