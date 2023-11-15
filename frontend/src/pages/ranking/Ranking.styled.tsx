import styled from "styled-components";

const StyledRankingPage = styled.div`
  height: 94vh;
  width: 100vw;
  font-family: ${(props) => props.theme.fonts.regularfont};
  font-size: ${(props) => props.theme.fontsize.semilarge};
`;

const StyledRankingTitle = styled.div`
  display: flex;
  align-items: center;
  padding-top: 4vh;
  width: 96vw;
  height: 6vh;
  padding-left: 4vw;
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: ${(props) => props.theme.fontsize.xlarge};
`;

const StyledRankingBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 84vh;
`;

const StyleMyRankingContainer = styled.div`
  width: 100vw;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledMyRanking = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const StyledMyProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledMyProfile = styled.img`
  width: 27vw;
  height: 27vw;
  border-radius: 5px;
  object-fit: contain;
  margin-left: 10px;
`;

const StyledImageContainer = styled.div`
  width: 18vw;
  height: 18vw;
  border-radius: 5px;
  /* border: 4px solid ${(props) => props.theme.colors.light}; */
  padding: 3px;
  background-color: white;
  margin: 1vw 5vw 1vw 5vw;
`;

const StyledTopScoreImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const StyledMyName = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: ${(props) => props.theme.fontsize.semilarge};
`;

const StyledMyTierContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex: 1; */
  margin-left: 10px;
`;

const StyledMyTier = styled.img.attrs<any>((props) => ({
  src: `/mypage/${props.grade}.svg`,
}))`
  width: 24px;
  height: 24px;
`;

const StyledMyTier2 = styled.img.attrs<any>((props) => ({
  src: `/mypage/${props.grade}.svg`,
}))`
  width: 24px;
  height: 24px;
`;

// 세로 컨테이너
const StlyedMyScoreContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: ${(props) => props.theme.fontsize.regular};
  margin: 10px;
  align-items: flex-start;
`;

const StyledMyScoreTitle = styled.div`
  font-size: ${(props) => props.theme.fontsize.regular};
  font-family: ${(props) => props.theme.fonts.boldfont};
`;

const StyledMyScore = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: ${(props) => props.theme.fontsize.small};
  margin: 5px;
  width: 100%;
  text-align: center;
`;

const StyledAllRankingContainer = styled.div`
  width: 90vw;
`;

const StyledTopRankerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* height: 15vh; */
`;

// top 3 컨테이너
const StyledTopRankerCard = styled.div.attrs<any>(() => {})`
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 24vw;
  transform: ${(props) =>
    props.index === 0
      ? "translateY(-10%)"
      : props.index === 1
      ? "translateY(-30%)"
      : props.index === 2
      ? "translateY(-5%)"
      : "translateY(0%)"};
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  /* border: 1px solid green; */
`;

const StyledTableHead = styled.thead`
  /* background-color: #f2f2f2; */
  border-bottom: 2px solid black;
`;

const StyledTableRow = styled.tr`
  /* border-bottom: 1px solid black; */
  display: flex;
  &:last-child {
    border-bottom: none;
  }
`;
const CustomTableRow = styled(StyledTableRow)`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
`;

const StyledContentContainer = styled.tbody`
  cursor: pointer;
  overflow: scroll;
`;

const StyledContent = styled.td.attrs<any>(() => ({}))`
  color: black;
  padding: 1vh;
  /* border-right: 2px solid ${(props) => props.theme.colors.white}; */
  font-size: ${(props) => props.theme.fontsize.xsmall};
  &:last-child {
    border-right: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled.th`
  padding: 1vh 2vw;
  justify-content: center;
  align-items: center;
  border-right: 2px solid ${(props) => props.theme.colors.white};
  &:last-child {
    border-right: none;
  }
`;
const StyledMyProfile2 = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  background-color: aliceblue;
  /* border: 1px solid black; */
`;
const StyledProfileContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 11%;
`;
const StyledProfileName = styled.div`
  margin-left: auto;
  margin-right: auto;
  font-size: ${(props) => props.theme.fontsize.small};
`;

const StyledRanking = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: ${(props) => props.theme.fontsize.large};
`;

export {
  StyledRanking,
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
  StyledTableRow,
  StyledContentContainer,
  StyledContent,
  StyledTitle,
  CustomTableRow,
  StyledMyProfile2,
  StyledProfileContent,
  StyledProfileName,
  StyledRankingBody,
  StyledTopScoreImg,
  StyledImageContainer,
};
