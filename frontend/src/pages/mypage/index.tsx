import {
  StyledMypage,
  StyledMypageInfo,
  StyledMypageResult,
  StyledMypageTop,
} from "./Mypage.styled";
import Lang from "./lang";

const MyPage = () => {
  return (
    <StyledMypage>
      <StyledMypageTop>
        <Lang />
      </StyledMypageTop>
      <StyledMypageInfo></StyledMypageInfo>
      <StyledMypageResult></StyledMypageResult>
    </StyledMypage>
  );
};

export default MyPage;
