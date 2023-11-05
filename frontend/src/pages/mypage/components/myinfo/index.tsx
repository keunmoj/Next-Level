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
  StyledAttendanceContainer,
  StyledAttendanceMent,
  StyledAttendanceButton,
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
                baseBgColor="#9ECDF2"
                bgColor="#4A90E2"
                isLabelVisible={false}
                transitionDuration="0.5s"
                height="0.5vh"
                width="90%"
              />
            </div>
            <StyledPrpgressBarInfo>90/100</StyledPrpgressBarInfo>
          </StyledProgressBarContainer>
        </StyledTierContainer>
        <StyledAttendanceContainer>
          <StyledAttendanceMent>
            현재 273일 째, 출석중이에요!
          </StyledAttendanceMent>
          <StyledAttendanceButton>출석 보상받기</StyledAttendanceButton>
        </StyledAttendanceContainer>
      </StyledMyInfoBox>
    </StyledMyInfoContainer>
  );
};

export default MyInfo;
