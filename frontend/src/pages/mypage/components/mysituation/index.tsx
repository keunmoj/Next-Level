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
      {result?.map((clip: any) => {
        return (
          <StyledClipBox key={clip.id} onClick={() => handleModal(clip)}>
            <StyledImageBox>
              <StyledImage src={S3_ADDRESS + clip.image}></StyledImage>
            </StyledImageBox>
            <StyledContentContainer>
              <StyledTtile>{clip.title}</StyledTtile>
              <StyledArtist>{clip.date}</StyledArtist>
              {/* <StyledClipButton>학습하기</StyledClipButton> */}
            </StyledContentContainer>
            <StyledScore>{clip.score}점</StyledScore>
          </StyledClipBox>
        );
      })}
    </StyledClipContainer>
  );
};

export default MySituation;
