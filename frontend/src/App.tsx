import "regenerator-runtime/runtime";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import BottomNav from "./components/common/bottomnav";
import Landing from "./pages/landing";
import OnBoarding from "./pages/login/onboarding";
import GoogleLogin from "./pages/login/googlelogin";
import AddInfomation from "./pages/login/addinformation";
import Sing from "./pages/contents/sing";
import SingList from "./pages/contents/sing/list";
import SingArtist from "./pages/contents/sing/artist";
import SingGame from "./pages/contents/sing/game";
import Drama from "./pages/contents/drama";
import DramaList from "@/pages/contents/drama/components/dramaList";
import DramaShadowing from "@/pages/contents/common/dramashadowing";
import Entertainment from "./pages/contents/entertainment";
import EntertainmentList from "@/pages/contents/entertainment/components/entertainmentList";
import EntertainmentShadowing from "@/pages/contents/common/entertainmentshadowing";
import Learning from "./pages/learning";
import LearningLife from "./pages/learning/life";
import LearningChatbot from "./pages/learning/chatbot/index";
import LearningResultList from "./pages/learning/result/list";
import LearningResultDetail from "./pages/learning/result/detail";
import Ranking from "./pages/ranking";
import MyPage from "./pages/mypage";
import MyPageEdit from "./pages/mypage/components/edit";
import Contents from "./pages/contents";
import "./App.css";
import LearningLifeChat from "./pages/learning/life/lifechat";
import ChatTest from "./pages/learning/chattest";

function App() {
  // TopNav를 숨길 페이지 path
  // const hiddenTopPaths = ["/"];
  // BottomNav를 숨길 페이지 path
  const hiddenBottomPaths = [
    "/",
    "/login",
    "/addinformation",
    "/oauth/redirect",
    "/sing/game",
    "/shadowinglist",
    "/shadowing",
    "/learning/chatbot",
    "/learning/lifechat",
    "/learning/resultdetail",
  ];

  // 동적 경로
  // const dynamicRoutes = [
  //   {
  //     regex: /^\/[^/]+\/\d+$/,
  //     path: (productType, id) => `/${productType}/${id}`,
  //   },
  // ];
  // 동적 경로 확인을 위한 함수
  // const isDynamicPath = (path) => {
  //   return dynamicRoutes.some((route) => route.regex.test(path));
  // };

  const Routing = () => {
    const location = useLocation();
    // 동적경로에도 Nav를 보여주지 않을 때 사용
    // const shouldHiddenBottom = hiddenBottomPaths.includes(location.pathname) || isDynamicPath(location.pathname);

    // useEffect(() => {
    //   function setScreenSize() {
    //     let vh = window.innerHeight * 0.01;
    //     document.documentElement.style.setProperty("--vh", `${vh}px`);
    //   }
    //   setScreenSize();
    // }, []);

    return (
      <>
        {/* 위에서 보여줄 TopNav */}
        {/* {!hiddenTopPaths.includes(location.pathname) && <TopNav />} */}
        <Routes>
          {/* 라우팅 할 페이지들 */}
          {/* 랜딩페이지 */}
          <Route path="/" element={<Landing />} />
          {/* 로그인페이지 */}
          <Route path="/login" element={<OnBoarding />} />
          {/* 여기는 구글로그인 성공시 리다이렉트 될 페이지 작업할려고 올려둔거 */}
          <Route path="/oauth/redirect" element={<GoogleLogin />} />
          <Route path="/addinformation" element={<AddInfomation />} />
          {/* 콘텐츠페이지 */}
          <Route path="/contents" element={<Contents />} />
          {/* 노래 */}
          <Route path="/sing" element={<Sing />} />
          <Route path="/sing/list" element={<SingList />} />
          <Route path="/sing/artist" element={<SingArtist />} />
          <Route path="/sing/game" element={<SingGame />} />
          {/* 드라마, 예능 페이지 */}
          <Route path="/drama" element={<Drama />} />
          <Route path="/drama/list/:id" element={<DramaList />} />
          <Route path="drama/shadowing/:id" element={<DramaShadowing />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route
            path="/entertainment/list/:id"
            element={<EntertainmentList />}
          />
          <Route
            path="entertainment/shadowing/:id"
            element={<EntertainmentShadowing />}
          />
          {/* 학습페이지 */}
          <Route path="/learning" element={<Learning />} />
          <Route path="/learning/life" element={<LearningLife />} />
          <Route path="/learning/lifechat" element={<LearningLifeChat />} />
          <Route path="/learning/chatbot" element={<LearningChatbot />} />
          <Route path="/learning/resultlist" element={<LearningResultList />} />
          <Route
            path="/learning/resultdetail"
            element={<LearningResultDetail />}
          />
          <Route path="/learning/chattest" element={<ChatTest />} />
          {/* 랭킹페이지 */}
          <Route path="/ranking" element={<Ranking />} />
          {/* 마이페이지 */}
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/edit" element={<MyPageEdit />} />
        </Routes>
        {!hiddenBottomPaths.includes(location.pathname) && <BottomNav />}
        {/* {!shouldHiddenBottom && <BottomNav />} */}
      </>
    );
  };

  return <Routing />;
}

export default App;
