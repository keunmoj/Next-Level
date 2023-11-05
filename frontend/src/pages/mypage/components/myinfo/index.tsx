import React from "react";
import {
  StyledMyInfoContainer,
  StyledMyInfoBox,
  StyledWelcomeBox,
  StyledWelcome,
  StyledWelcomeIcon,
  StyledTierContainer,
  StyledTierBox,
  StyledTier,
  StyledTierName,
  StyledProgressBarContainer,
  StyledPrpgressBarInfo,
} from "./MyInfo.styled";
import ProgressBar from "@ramonak/react-progress-bar";
const MyInfo = () => {
  return (
    <StyledMyInfoContainer>
      <StyledMyInfoBox>
        <StyledWelcomeBox>
          <StyledWelcome>님 안녕하세요!</StyledWelcome>
          <StyledWelcomeIcon src="/mypage/pencil.png"></StyledWelcomeIcon>
        </StyledWelcomeBox>
        <StyledTierContainer>
          <StyledTierBox>
            <StyledTier src="/mypage/bronze.png"></StyledTier>
            <StyledTierName>브론즈</StyledTierName>
          </StyledTierBox>
          <StyledProgressBarContainer>
            <div style={{ width: "100%" }}>
              <ProgressBar
                completed={90}
                baseBgColor="#F2776B"
                bgColor="#7F3C35"
                isLabelVisible={false}
                transitionDuration="0.5s"
                height="0.5vh"
                width="60%"
              />
            </div>
            <StyledPrpgressBarInfo>90/100</StyledPrpgressBarInfo>
          </StyledProgressBarContainer>
        </StyledTierContainer>
      </StyledMyInfoBox>
    </StyledMyInfoContainer>
  );
};

export default MyInfo;
