import {
  StyledMypage,
  StyledMypageInfo,
  StyledMypageResult,
  StyledMypageTop,
} from "./Mypage.styled";
import Lang from "./components/lang";
import MyInfo from "./components/myinfo";

const MyPage = () => {
  return (
    <StyledMypage initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <StyledMypageTop>
        <Lang />
      </StyledMypageTop>
      <MyInfo />
    </StyledMypage>
  );
};

export default MyPage;
