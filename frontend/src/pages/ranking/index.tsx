import { useRankingGetHook } from "@/hooks/ranking/useRankingGetHook";
import { useEffect } from "react";
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
  StyledUnTopRankerContainer,
  StyledUnTopRankerTopContainer,
  StyledUnTopRankerTop,
  StyledUnRankerCard,
  StyledTable,
  StyledTableHead,
  StyledTableRow,
  StyledContentContainer,
  StyledContent,
  StyledTitle,
  CustomTableRow,
} from "./Ranking.styled";

const Ranking = () => {
  const { ranking, getRanking } = useRankingGetHook();
  useEffect(() => {
    getRanking();
  }, []);
  useEffect(() => {
    console.log(ranking);
  }, [ranking]);
  return (
    <StyledRankingPage>
      <StyledRankingTitle>오늘의 랭킹</StyledRankingTitle>
      <StyleMyRankingContainer>
        <StyledMyRanking>
          <StyledMyProfileContainer>
            <StyledMyProfile
              src={ranking?.userScoreResDto.profileImageUrl}
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
          {ranking?.response.map((rank: any, index: any) => {
            if (index === 0 || index === 1 || index === 2) {
              return <StyledTopRankerCard index={index}></StyledTopRankerCard>;
            }
          })}
        </StyledTopRankerContainer>
        {/* <StyledUnTopRankerContainer>
          <StyledUnTopRankerTopContainer>
            <StyledUnTopRankerTop left="5vw">랭킹</StyledUnTopRankerTop>
            <StyledUnTopRankerTop left="6vw">유저</StyledUnTopRankerTop>
            <StyledUnTopRankerTop right="5vw">점수</StyledUnTopRankerTop>
          </StyledUnTopRankerTopContainer>
          <StyledUnRankerCard></StyledUnRankerCard>
        </StyledUnTopRankerContainer> */}
        <StyledTable>
          <StyledTableHead>
            <StyledTableRow>
              <StyledTitle>랭킹</StyledTitle>
              <StyledTitle>유저</StyledTitle>
              <StyledTitle>점수</StyledTitle>
            </StyledTableRow>
          </StyledTableHead>
          <StyledContentContainer>
            {ranking?.response.map((rank: any, index: any) => {
              if (index > 2) {
                return (
                  <CustomTableRow>
                    <StyledContent>{index + 1}</StyledContent>
                    <StyledContent></StyledContent>
                    <StyledContent></StyledContent>
                  </CustomTableRow>
                );
              }
            })}
          </StyledContentContainer>
        </StyledTable>
      </StyledAllRankingContainer>
    </StyledRankingPage>
  );
};

export default Ranking;
