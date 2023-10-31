import {
  StyledMypage,
  StyledMypageInfo,
  StyledMypageResult,
  StyledMypageTop,
} from "./Mypage.styled";
import Lang from "./lang";

const MyPage = () => {
  return (
    <StyledMypage initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <StyledMypageTop>
        <Lang />
      </StyledMypageTop>
      <StyledMypageInfo></StyledMypageInfo>
      <StyledMypageResult></StyledMypageResult>
    </StyledMypage>
  );
};

export default MyPage;
