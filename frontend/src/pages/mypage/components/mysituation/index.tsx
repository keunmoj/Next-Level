import { useSituationResultGetHook } from "@/hooks/mypage/useSituationResultGetHook";
import React, { useEffect } from "react";
import {
  StyledClipBox,
  StyledClipContainer,
  StyledImageBox,
  StyledImage,
  StyledContentContainer,
  StyledTtile,
  StyledArtist,
  StyledScore,
  StyledClipButton,
  StyledContainer,
  StyledGrid,
} from "./MySituation.styled";
import { S3_ADDRESS } from "@/api/api";

const MySituation = (props: any) => {
  const { result, getSituationResult } = useSituationResultGetHook();
  useEffect(() => {
    getSituationResult();
  }, []);
  const handleModal = (clip: any) => {
    props.openModal();
    props.setMedia({
      id: clip.id,
      url: clip.image,
      title: clip.title,
    });
  };
  return (
    <StyledClipContainer>
      <StyledGrid>
        {result?.map((clip: any) => {
          return (
            <StyledClipBox key={clip.id} onClick={() => handleModal(clip)}>
              <StyledContentContainer>
                <StyledContainer>
                  <StyledImageBox>
                    <StyledImage src={S3_ADDRESS + clip.image}></StyledImage>
                    <StyledTtile>{clip.title}</StyledTtile>
                  </StyledImageBox>
                  <StyledArtist>{clip.date}</StyledArtist>
                  <StyledScore>{clip.score}/100점</StyledScore>
                  <StyledClipButton>▶ 세부 점수 보기</StyledClipButton>
                </StyledContainer>
              </StyledContentContainer>
            </StyledClipBox>
          );
        })}
      </StyledGrid>
    </StyledClipContainer>
  );
};

export default MySituation;
