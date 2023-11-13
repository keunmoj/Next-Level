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
  font-size: ${(props) => props.theme.fontsize.xxlarge};
`;

const StyleMyRankingContainer = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3vh;
`;

const StyledMyRanking = styled.div`
  width: 90%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors.main};
  display: flex;
`;

const StyledMyProfileContainer = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10%;
`;

const StyledMyProfile = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  /* border: 1px solid black; */
`;
const StyledMyName = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: ${(props) => props.theme.fontsize.regular};
`;
const StyledMyTierContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const StyledMyTier = styled.img.attrs<any>((props) => ({
  src: `/mypage/${props.grade}.svg`,
}))`
  width: 48px;
  height: 48px;
`;
const StyledMyTier2 = styled.img.attrs<any>((props) => ({
  src: `/mypage/${props.grade}.svg`,
}))`
  width: 36px;
  height: 36px;
`;
const StlyedMyScoreContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3%;
`;
const StyledMyScoreTitle = styled.div`
  font-size: ${(props) => props.theme.fontsize.small};
  font-family: ${(props) => props.theme.fonts.boldfont};
`;
const StyledMyScore = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: ${(props) => props.theme.fontsize.small};
`;

const StyledAllRankingContainer = styled.div`
  height: 61vh;
  width: 90vw;
  background-color: ${(props) => props.theme.colors.white};
  position: absolute;
  bottom: 6vh;
  left: 50%;
  transform: translate(-50%);
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

const StyledTopRankerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 15vh;
`;
const StyledTopRankerCard = styled.div.attrs<any>(() => {})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 28%;
  background-color: ${(props) => props.theme.colors.light};
  transform: ${(props) =>
    props.index === 1 ? "translateY(-50%)" : " translateY(-20%)"};
  border-radius: 10px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
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
  grid-template-columns: 1fr 4fr 2fr;
`;

const StyledContentContainer = styled.tbody`
  cursor: pointer;
  overflow: scroll;
`;

const StyledContent = styled.td.attrs<any>(() => ({}))`
  color: black;
  padding: 1vh 4vw;
  border-right: 2px solid ${(props) => props.theme.colors.white};
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
  color: ${(props) => props.theme.colors.main};
  /* background-color: ${(props) => props.theme.colors.menu}; */
  border-right: 2px solid ${(props) => props.theme.colors.white};
  &:last-child {
    border-right: none;
  }
`;
const StyledMyProfile2 = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
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
  font-size: ${(props) => props.theme.fontsize.xsmall};
`;

const StyledLanking = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: ${(props) => props.theme.fontsize.large};
`;

export {
  StyledLanking,
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
};
