import React, { useEffect, useState } from "react";
import {
  StyledBottomNav,
  StyledBottomNavBox,
  StyledBottomNavIcon,
} from "./BottomNav.styled";
import { useNavigate } from "react-router-dom";
import useNavState from "@/stores/nav/useNavState";

const BottomNav = () => {
  const navigate = useNavigate();

  // 클릭한 박스의 id값의 페이지로 이동
  // const [selectbottomnav, setSelectBottomNav] = useState("contents");
  const selectbottomnav = useNavState((state: any) => state.selectbottomnav);
  const setSelectBottomNav = useNavState(
    (state: any) => state.setSelectBottomNav
  );
  const goBottomNav = (e: any) => {
    setSelectBottomNav(e.target.id);
    navigate(`/${e.target.id}`);
  };

  useEffect(() => {
    console.log(selectbottomnav);
  }, [selectbottomnav]);

  return (
    <StyledBottomNav>
      <StyledBottomNavBox
        onClick={goBottomNav}
        id="contents"
        selectbottomnav={selectbottomnav}
      >
        {selectbottomnav === "contents" ? (
          <StyledBottomNavIcon
            src="/bottomNav/selectcontentsbuttonfill.png"
            alt="contents"
            id="contents"
          />
        ) : (
          <StyledBottomNavIcon
            src="/bottomNav/contentsbutton.png"
            alt="contents"
            id="contents"
          />
        )}
      </StyledBottomNavBox>
      <StyledBottomNavBox
        onClick={goBottomNav}
        id="learning"
        selectbottomnav={selectbottomnav}
      >
        {selectbottomnav === "learning" ? (
          <StyledBottomNavIcon
            src="/bottomNav/selectlearnbutton.png"
            alt="learning"
            id="learning"
          />
        ) : (
          <StyledBottomNavIcon
            src="/bottomNav/learnbutton.png"
            alt="learning"
            id="learning"
          />
        )}
      </StyledBottomNavBox>
      <StyledBottomNavBox
        onClick={goBottomNav}
        id="ranking"
        selectbottomnav={selectbottomnav}
      >
        {selectbottomnav === "ranking" ? (
          <StyledBottomNavIcon
            src="/bottomNav/selectrankingbutton.png"
            alt="ranking"
            id="ranking"
          />
        ) : (
          <StyledBottomNavIcon
            src="/bottomNav/rankingbutton.png"
            alt="ranking"
            id="ranking"
          />
        )}
      </StyledBottomNavBox>
      <StyledBottomNavBox
        onClick={goBottomNav}
        id="mypage"
        selectbottomnav={selectbottomnav}
      >
        {selectbottomnav === "mypage" ? (
          <StyledBottomNavIcon
            src="/bottomNav/selectmypagebutton.png"
            alt="mypage"
            id="mypage"
          />
        ) : (
          <StyledBottomNavIcon
            src="/bottomNav/mypagebutton.png"
            alt="mypage"
            id="mypage"
          />
        )}
      </StyledBottomNavBox>
    </StyledBottomNav>
  );
};

export default BottomNav;
