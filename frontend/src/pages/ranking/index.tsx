import { useRankingGetHook } from "@/hooks/ranking/useRankingGetHook";
import { useEffect, useState } from "react";
import {
  StyledRankingPage,
  StyledRankingTitle,
  StyleMyRankingContainer,
  StyledMyRanking,
  StyledMyProfileContainer,
  StyledMyProfile,
  StyledMyName,
  StyledMyTierContainer,
  StyledMyTier,
  StyledMyTier2,
  StlyedMyScoreContainer,
  StyledMyScoreTitle,
  StyledMyScore,
  StyledAllRankingContainer,
  StyledTopRankerContainer,
  StyledTopRankerCard,
  StyledTable,
  StyledTableHead,
  StyledContentContainer,
  StyledContent,
  StyledTitle,
  CustomTableRow,
  StyledMyProfile2,
  StyledProfileContent,
  StyledProfileName,
  StyledRanking,
  StyledRankingBody,
  StyledTopScoreImg,
  StyledImageContainer,
} from "./Ranking.styled";
import { S3_ADDRESS } from "@/api/api";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
const Ranking = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { ranking, newRanking } = useRankingGetHook();

  return (
    <StyledRankingPage>
      <StyledRankingTitle>{t("ranking.todayRanking")}</StyledRankingTitle>

      <StyledRankingBody>
        {/* 내 점수 */}
        <StyleMyRankingContainer onClick={() => navigate("/mypage")}>
          <StyledMyRanking>
            <StyledMyProfileContainer>
              <StyledMyProfile
                src={S3_ADDRESS + ranking?.user.profileImageUrl}
              ></StyledMyProfile>
              <StlyedMyScoreContainer>
                <StyledMyProfileContainer>
                  <StyledMyName>{ranking?.user.nickName}</StyledMyName>
                  <StyledMyTierContainer>
                    <StyledMyTier grade={ranking?.user.grade}></StyledMyTier>
                  </StyledMyTierContainer>
                </StyledMyProfileContainer>
                <StyledMyProfileContainer>
                  내 점수 : {ranking?.user.score}점
                </StyledMyProfileContainer>
              </StlyedMyScoreContainer>
            </StyledMyProfileContainer>
          </StyledMyRanking>
        </StyleMyRankingContainer>

        {/* 10위 전체 테이블 */}
        <StyledAllRankingContainer>
          {/* 탑 3위 */}
          <StyledTopRankerContainer>
            {newRanking.map((rank: any, index: any) => {
              if (index === 0 || index === 1 || index === 2) {
                return (
                  <StyledTopRankerCard key={index} index={index}>
                    <StyledImageContainer>
                      <StyledTopScoreImg
                        src={S3_ADDRESS + rank.profileImageUrl}
                      ></StyledTopScoreImg>
                    </StyledImageContainer>
                    <StyledMyProfileContainer>
                      <StyledMyScoreTitle>{rank.nickName}</StyledMyScoreTitle>
                      <StyledMyTier2 grade={rank.grade}></StyledMyTier2>
                    </StyledMyProfileContainer>
                    <StyledMyScore>{rank.score}점</StyledMyScore>
                  </StyledTopRankerCard>
                );
              }
            })}
          </StyledTopRankerContainer>
          <div>
            {/* 7명 순위 */}
            <StyledTable>
              {/* 제목 */}
              <StyledTableHead>
                <CustomTableRow>
                  <StyledTitle>{t("ranking.ranking")}</StyledTitle>
                  <StyledTitle>{t("ranking.user")}</StyledTitle>
                  <StyledTitle>{t("ranking.score")}</StyledTitle>
                </CustomTableRow>
              </StyledTableHead>
              {/* 유저 */}
              <StyledContentContainer>
                {ranking?.rankedUsers.map((rank: any, index: any) => {
                  if (index > 2) {
                    return (
                      <CustomTableRow key={index}>
                        <StyledContent>
                          <StyledRanking>{index + 1}</StyledRanking>
                        </StyledContent>
                        <StyledContent>
                          <StyledProfileContent>
                            <StyledMyProfile2
                              src={S3_ADDRESS + rank.profileImageUrl}
                            ></StyledMyProfile2>
                            <StyledProfileName>
                              {rank.nickName}
                            </StyledProfileName>
                            <StyledMyTier2 grade={rank.grade}></StyledMyTier2>
                          </StyledProfileContent>
                        </StyledContent>
                        <StyledContent>{rank.score}</StyledContent>
                      </CustomTableRow>
                    );
                  }
                })}
              </StyledContentContainer>
            </StyledTable>
          </div>
        </StyledAllRankingContainer>
      </StyledRankingBody>
    </StyledRankingPage>
  );
};

export default Ranking;
