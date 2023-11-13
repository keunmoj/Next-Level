import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { useUserInfoHook } from "@/hooks/user/useUserInfoHook";
import useUserState from "@/stores/main/useUserState";
import { useAttendancePostHook } from "@/hooks/mypage/useAttendancePostHook";
import { useTranslation } from "react-i18next";
const MyInfo = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { getUserInfo } = useUserInfoHook();
  const { postAttendance } = useAttendancePostHook();
  const user = useUserState((state: any) => state.user);
  const currentDate: any = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const targetDate: any = new Date(user?.lastAttendanceDate);
  const timeDiff = currentDate - targetDate;
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const [maxComplete, setMaxComplete] = useState<number>();
  useEffect(() => {
    getUserInfo();
  }, []);
  useEffect(() => {
    if (0 <= user.score && user.score < 300) {
      setMaxComplete(300);
    } else if (300 <= user.score && user.score < 1000) {
      setMaxComplete(1000);
    } else if (1000 <= user.score && user.score < 3000) {
      setMaxComplete(3000);
    } else if (3000 <= user.score && user.score < 5000) {
      setMaxComplete(5000);
    } else if (5000 <= user.score && user.score < 10000) {
      setMaxComplete(10000);
    } else if (10000 <= user.score) {
      setMaxComplete(user.score);
    }
  }, [user]);

  return (
    <StyledMyInfoContainer>
      <StyledMyInfoBox>
        <StyledWelcomeBox>
          <StyledWelcome>
            {user?.nickName}
            {t("mypage.welcome")}
          </StyledWelcome>
          <StyledWelcomeIcon
            src="/mypage/pencil.png"
            onClick={() => navigate("/mypage/edit")}
          ></StyledWelcomeIcon>
        </StyledWelcomeBox>
        <StyledTierContainer>
          <StyledTierBox>
            <StyledTier grade={user.grade}></StyledTier>
            <StyledTierName>{user.grade}</StyledTierName>
          </StyledTierBox>
          <StyledProgressBarContainer>
            <div style={{ width: "100%" }}>
              <ProgressBar
                completed={user?.score}
                maxCompleted={maxComplete}
                baseBgColor="#9ECDF2"
                bgColor="#4A90E2"
                isLabelVisible={false}
                transitionDuration="0.5s"
                height="0.5vh"
                width="90%"
              />
            </div>
            <StyledPrpgressBarInfo>
              {user?.score + "/" + maxComplete}
            </StyledPrpgressBarInfo>
          </StyledProgressBarContainer>
        </StyledTierContainer>
        <StyledAttendanceContainer>
          <StyledAttendanceMent>
            {t("mypage.now")}
            {user.consecutiveAttendanceDays}
            {t("mypage.attendance")}
          </StyledAttendanceMent>
          <StyledAttendanceButton
            last={user?.lastAttendanceDate}
            today={formattedDate}
            onClick={postAttendance}
          >
            {user?.lastAttendanceDate === formattedDate
              ? "출석 완료"
              : "출석 보상 받기"}
          </StyledAttendanceButton>
        </StyledAttendanceContainer>
      </StyledMyInfoBox>
    </StyledMyInfoContainer>
  );
};

export default MyInfo;
