import React, { useEffect, useState } from "react";
import { StyledTopNav, StyledTopNavBox, StyledTopNavIcon } from "./topNav.styled";
import { useNavigate } from "react-router-dom";

const TopNav = () => {
  const navigate = useNavigate()
  
  // 클릭시 id 페이지로 이동
  const goContentsPage = (e:any) => {
    navigate(`/${e.target.id}`)
  }


  return (
    <StyledTopNav>
      <StyledTopNavBox id="sing" onClick={goContentsPage}>
        <StyledTopNavIcon id="sing">음악</StyledTopNavIcon>
      </StyledTopNavBox>
      <StyledTopNavBox id="drama" onClick={goContentsPage}>
        <StyledTopNavIcon id="drama">드라마</StyledTopNavIcon>
      </StyledTopNavBox>
      <StyledTopNavBox id="entertainment" onClick={goContentsPage}>
        <StyledTopNavIcon id="entertainment">예능</StyledTopNavIcon>
      </StyledTopNavBox>
    </StyledTopNav>
  );
};

export default TopNav;
