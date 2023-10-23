import React, { useEffect, useState } from "react";
import {StyledBottomNav, StyledBottomNavBox, StyledBottomNavIcon} from "./bottomNav.styled"
import { useNavigate } from "react-router-dom";


const BottomNav = () => {
  const navigate = useNavigate()

  // 클릭한 박스의 id값의 페이지로 이동
  const [selectBottomNav, setSelectBottomNav] = useState()

  const goBottomNav = (e : any) => {
    setSelectBottomNav(e.target.id)    
  }

  useEffect(() => {
    navigate(`/${selectBottomNav}`)  
  }, [selectBottomNav])

  return (<StyledBottomNav>
    <StyledBottomNavBox onClick={goBottomNav} id="sing">
      <StyledBottomNavIcon src='/bottomNav/contentsbutton.png' alt='sing' id='sing'></StyledBottomNavIcon>
    </StyledBottomNavBox>
    <StyledBottomNavBox onClick={goBottomNav} id="learning">
      <StyledBottomNavIcon src='/bottomNav/contentsbutton.png' alt='learning' id="learning"></StyledBottomNavIcon>
    </StyledBottomNavBox>
    <StyledBottomNavBox onClick={goBottomNav} id="ranking">
      <StyledBottomNavIcon src='/bottomNav/contentsbutton.png' alt='ranking' id="ranking"></StyledBottomNavIcon>
    </StyledBottomNavBox>
    <StyledBottomNavBox onClick={goBottomNav} id="mypage">
      <StyledBottomNavIcon src='/bottomNav/contentsbutton.png' alt='mypage' id="mypage"></StyledBottomNavIcon>
    </StyledBottomNavBox>
  </StyledBottomNav>);
};

export default BottomNav;
