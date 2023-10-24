import React, { useEffect, useState } from "react";
import {
  StyledBottomNav,
  StyledBottomNavBox,
  StyledBottomNavIcon,
} from "./bottomNav.styled";
import { useNavigate } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();

  // 클릭한 박스의 id값의 페이지로 이동
  const goBottomNav = (e: any) => {
    navigate(`/${e.target.id}`);
  };

  return (
    <StyledBottomNav>
      <StyledBottomNavBox onClick={goBottomNav} id="sing">
        <StyledBottomNavIcon
          src="/bottomNav/contentsbutton.png"
          alt="sing"
          id="sing"
        ></StyledBottomNavIcon>
      </StyledBottomNavBox>
      <StyledBottomNavBox onClick={goBottomNav} id="learning">
        <StyledBottomNavIcon
          src="/bottomNav/learnbutton.png"
          alt="learning"
          id="learning"
        ></StyledBottomNavIcon>
      </StyledBottomNavBox>
      <StyledBottomNavBox onClick={goBottomNav} id="ranking">
        <StyledBottomNavIcon
          src="/bottomNav/rankingbutton.png"
          alt="ranking"
          id="ranking"
        ></StyledBottomNavIcon>
      </StyledBottomNavBox>
      <StyledBottomNavBox onClick={goBottomNav} id="mypage">
        <StyledBottomNavIcon
          src="/bottomNav/mypagebutton.png"
          alt="mypage"
          id="mypage"
        ></StyledBottomNavIcon>
      </StyledBottomNavBox>
    </StyledBottomNav>
  );
};

export default BottomNav;
