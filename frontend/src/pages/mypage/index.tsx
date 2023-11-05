import {
  StyledMypage,
  StyledMypageInfo,
  StyledMypageResult,
  StyledMypageTop,
} from "./Mypage.styled";
import Lang from "./components/lang";
import MyInfo from "./components/myinfo";
import Mylearning from "./components/mylearning";

const MyPage = () => {
  return (
    <StyledMypage initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <StyledMypageTop>
        <Lang />
      </StyledMypageTop>
      <MyInfo></MyInfo>
      <Mylearning></Mylearning>
    </StyledMypage>
  );
};

export default MyPage;
