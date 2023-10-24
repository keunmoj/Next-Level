import { useNavigate } from "react-router-dom";
import {
  StyledSing,
  StyledSingTopContainer,
  StyledSingCategory,
  StyledSingBodyContainer,
  StyledSingContentBox,
  StyledSingBox,
  StyledSingImg,
  StyledSingTitle,
  StyledSingArtistContentBox,
  StyledSingArtistBox,
  StyledSingArtistImg,
  StyledSingArtitstTitle,
} from "./Sing.styled";

const Sing = () => {
  const navigate = useNavigate();
  const goCategory = (e: any) => {
    console.log(e.target.id);
    navigate(`/sing/${e.target.id}`);
  };

  return (
    <StyledSing>
      <StyledSingTopContainer>K-POP,</StyledSingTopContainer>

      {/* 임시 컨테이너 데이터 들어오면 map 돌릴 예정 */}
      {/* 인기음악 */}
      <StyledSingBodyContainer>
        <StyledSingCategory id="list" onClick={goCategory}>
          인기음악
        </StyledSingCategory>
        <StyledSingContentBox>
          <StyledSingBox>
            <StyledSingImg>노래이미지</StyledSingImg>
            <StyledSingTitle>노래제목</StyledSingTitle>
          </StyledSingBox>
          <StyledSingBox>
            <StyledSingImg>노래이미지</StyledSingImg>
            <StyledSingTitle>노래제목</StyledSingTitle>
          </StyledSingBox>
          <StyledSingBox>
            <StyledSingImg>노래이미지</StyledSingImg>
            <StyledSingTitle>노래제목</StyledSingTitle>
          </StyledSingBox>
          <StyledSingBox>
            <StyledSingImg>노래이미지</StyledSingImg>
            <StyledSingTitle>노래제목</StyledSingTitle>
          </StyledSingBox>
        </StyledSingContentBox>

        {/* 인기아티스트 */}

        <StyledSingCategory id="artist" onClick={goCategory}>
          인기아티스트
        </StyledSingCategory>
        <StyledSingArtistContentBox>
          <StyledSingArtistBox>
            <StyledSingArtistImg></StyledSingArtistImg>
            <StyledSingArtitstTitle>가수이름</StyledSingArtitstTitle>
          </StyledSingArtistBox>
          <StyledSingArtistBox>
            <StyledSingArtistImg></StyledSingArtistImg>
            <StyledSingArtitstTitle>가수이름</StyledSingArtitstTitle>
          </StyledSingArtistBox>
          <StyledSingArtistBox>
            <StyledSingArtistImg></StyledSingArtistImg>
            <StyledSingArtitstTitle>가수이름</StyledSingArtitstTitle>
          </StyledSingArtistBox>
          <StyledSingArtistBox>
            <StyledSingArtistImg></StyledSingArtistImg>
            <StyledSingArtitstTitle>가수이름</StyledSingArtitstTitle>
          </StyledSingArtistBox>
        </StyledSingArtistContentBox>
      </StyledSingBodyContainer>
    </StyledSing>
  );
};

export default Sing;
