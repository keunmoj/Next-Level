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
} from "./Ranking.styled";
import { S3_ADDRESS } from "@/api/api";
const Ranking = () => {
  const { ranking, getRanking } = useRankingGetHook();
  const user = ranking?.response;
  const [newRanking, setNewRanking] = useState<any>([]);
  useEffect(() => {
    getRanking();
  }, []);
  useEffect(() => {
    if (user) {
      const newRankingCopy = [...user];
      const temp = newRankingCopy[0];
      newRankingCopy[0] = newRankingCopy[1];
      newRankingCopy[1] = temp;
      setNewRanking(newRankingCopy);
    }
  }, [user]);

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <StyledRankingPage>
      <StyledRankingTitle>오늘의 랭킹</StyledRankingTitle>
      <StyleMyRankingContainer>
        <StyledMyRanking>
          <StyledMyProfileContainer>
            <StyledMyProfile
              src={S3_ADDRESS + ranking?.userScoreResDto.profileImageUrl}
            ></StyledMyProfile>
            <StyledMyName>{ranking?.userScoreResDto.nickname}</StyledMyName>
          </StyledMyProfileContainer>
          <StyledMyTierContainer></StyledMyTierContainer>
          <StlyedMyScoreContainer>
            <StyledMyScoreTitle>내 점수</StyledMyScoreTitle>
            <StyledMyScore>{ranking?.userScoreResDto.score}</StyledMyScore>
          </StlyedMyScoreContainer>
        </StyledMyRanking>
      </StyleMyRankingContainer>
      <StyledAllRankingContainer>
        <StyledTopRankerContainer>
          {newRanking.map((rank: any, index: any) => {
            if (index === 0 || index === 1 || index === 2) {
              return (
                <StyledTopRankerCard key={index} index={index}>
                  <StyledMyProfile
                    src={S3_ADDRESS + rank.profileImageUrl}
                  ></StyledMyProfile>
                  <StyledMyScoreTitle>내 점수</StyledMyScoreTitle>
                  <StyledMyScore>{rank.score}</StyledMyScore>
                </StyledTopRankerCard>
              );
            }
          })}
        </StyledTopRankerContainer>
        <div>
          <StyledTable>
            <StyledTableHead>
              <CustomTableRow>
                <StyledTitle>랭킹</StyledTitle>
                <StyledTitle>유저</StyledTitle>
                <StyledTitle>점수</StyledTitle>
              </CustomTableRow>
            </StyledTableHead>
            <StyledContentContainer>
              {ranking?.response.map((rank: any, index: any) => {
                if (index > 2) {
                  return (
                    <CustomTableRow key={index}>
                      <StyledContent>{index + 1}</StyledContent>
                      <StyledContent>
                        <StyledProfileContent>
                          <StyledMyProfile2
                            src={S3_ADDRESS + rank.profileImageUrl}
                          ></StyledMyProfile2>
                          <StyledProfileName>{rank.nickname}</StyledProfileName>
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
    </StyledRankingPage>
  );
};

export default Ranking;
