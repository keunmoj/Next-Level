import { useDramaResultGetHook } from "@/hooks/mypage/useDramaResultGetHook";
import React, { useEffect } from "react";
import {
  StyledClipContainer,
  StyledClipBox,
  StyledImageBox,
  StyledImage,
  StyledContentContainer,
  StyledTtile,
  StyledClipButton,
} from "./MyShadowing.styled";
import { useNavigate } from "react-router-dom";
import { S3_ADDRESS } from "@/api/api";
const MyShadowing = () => {
  const { result, getDramaResult } = useDramaResultGetHook();
  const navigate = useNavigate();
  useEffect(() => {
    getDramaResult();
  }, []);
  // useEffect(() => {
  //   console.log(result);
  // }, [result]);

  return (
    <StyledClipContainer>
      {result?.map((clip: any) => {
        return (
          <StyledClipBox
            key={clip.id}
            onClick={() => navigate(`/drama/shadowing/${clip.id}`)}
          >
            <StyledImageBox>
              <StyledImage src={S3_ADDRESS + clip.image}></StyledImage>
            </StyledImageBox>
            <StyledContentContainer>
              <StyledTtile>{clip.title}</StyledTtile>
              <StyledClipButton>학습하기</StyledClipButton>
            </StyledContentContainer>
          </StyledClipBox>
        );
      })}
    </StyledClipContainer>
  );
};
export default MyShadowing;
