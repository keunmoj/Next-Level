import {
  StyledEnter,
  StyledEnterTopContainer,
  StyledEnterBodyContainer,
  StyledEnterCategory,
  StyledEnterTodayContainer,
  StyledEnterTodayBox,
  StyledEnterTodayImg,
  StyledEnterTodayTitle,
  StyledEnterTodayText,
  StyledEnterArtistContainer,
  StyledEnterArtistBox,
  StyledEnterArtistyImg,
  StyledEnterArtistTitle,
} from "./Entertainment.styled";

const Entertainment = () => {
  return (
    <StyledEnter>
      <StyledEnterTopContainer>K-Enter</StyledEnterTopContainer>
      <StyledEnterBodyContainer>
        <StyledEnterCategory>오늘의 예능</StyledEnterCategory>

        {/* 오늘의 예능 각 클립 */}
        <StyledEnterTodayContainer>
          <StyledEnterTodayBox>
            <StyledEnterTodayImg>썸네일</StyledEnterTodayImg>
            <StyledEnterTodayTitle>
              [런닝맨] 다음부터 셋이 그냥 만나지마 😠
            </StyledEnterTodayTitle>
            <StyledEnterTodayText>"n분의 1로 계산하자"</StyledEnterTodayText>
          </StyledEnterTodayBox>
          <StyledEnterTodayBox>
            <StyledEnterTodayImg>썸네일</StyledEnterTodayImg>
            <StyledEnterTodayTitle>
              [런닝맨] 다음부터 셋이 그냥 만나지마 😠
            </StyledEnterTodayTitle>
            <StyledEnterTodayText>"n분의 1로 계산하자"</StyledEnterTodayText>
          </StyledEnterTodayBox>
          <StyledEnterTodayBox>
            <StyledEnterTodayImg>썸네일</StyledEnterTodayImg>
            <StyledEnterTodayTitle>
              [런닝맨] 다음부터 셋이 그냥 만나지마 😠
            </StyledEnterTodayTitle>
            <StyledEnterTodayText>"n분의 1로 계산하자"</StyledEnterTodayText>
          </StyledEnterTodayBox>
        </StyledEnterTodayContainer>
      </StyledEnterBodyContainer>

      {/* 아티스트 활약상 */}
      <StyledEnterBodyContainer>
        <StyledEnterCategory>#아티스트</StyledEnterCategory>
        <StyledEnterArtistContainer>
          {/* 아티스트 개별 클립 */}
          <StyledEnterArtistBox>
            <StyledEnterArtistyImg>썸네일</StyledEnterArtistyImg>
            <StyledEnterArtistTitle>
              [아는형님] n분의 1로 계산하자
            </StyledEnterArtistTitle>
          </StyledEnterArtistBox>
          <StyledEnterArtistBox>
            <StyledEnterArtistyImg>썸네일</StyledEnterArtistyImg>
            <StyledEnterArtistTitle>
              [아는형님] n분의 1로 계산하자
            </StyledEnterArtistTitle>
          </StyledEnterArtistBox>
        </StyledEnterArtistContainer>
      </StyledEnterBodyContainer>
    </StyledEnter>
  );
};

export default Entertainment;
