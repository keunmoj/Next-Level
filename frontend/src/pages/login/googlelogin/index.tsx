import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function GoogleLogin() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  // Access Token 추출
  const accessTokenParam = searchParams.get("token");
  // User 정보 추출
  const user = searchParams.get("role");

  // Access Token에서 "Bearer " 부분을 제거하고, 공백을 제거
  const accessToken = accessTokenParam ? accessTokenParam.trim() : null;

  // Access Token 출력 (디버깅용)
  console.log("Access Token:", accessToken);

  // accessToken이 있는 경우 /contents 페이지로 이동
  const goTo = () => {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      if (user === "ROLE_USER") {
        navigate("/contents");
      } else if (user === "ROLE_GUEST") {
        navigate("/addInformation");
      }
    }
  };

  useEffect(() => {
    goTo();
  }, [accessToken]);
  return <></>;
}

export default GoogleLogin;
