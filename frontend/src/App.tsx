import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SingGame from "./pages/singgame";
function App() {
  // TopNav를 숨길 페이지 path
  // const hiddenTopPaths = ["/"];
  // BottomNav를 숨길 페이지 path
  // const hiddenBottomPaths = ["/"];

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
        {/* {!hiddenTopPaths.includes(location.pathname) && <TopAppBar />} */}
        <Routes>
          {/* 라우팅 할 페이지들 */}
          {/* <Route path='/' element={<Splash />} /> */}
          <Route path="/singgame" element={<SingGame />} />
        </Routes>

        {/* {!shouldHiddenBottom && <BottomNav />} */}
      </>
    );
  };

  return <Routing />;
}

export default App;
