import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  StyledLang,
  StyledLangButton,
  StyledLangDropdown,
  StyledLangIcon,
  StyledLangTitle,
} from "./Lang.styled";

const Lang = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e: any) => {
    i18n.changeLanguage(`${e.target.id}`);
  };

  const [openLangList, setOpenLangList] = useState(false);
  const openList = () => {
    setOpenLangList(!openLangList);
  };

  return (
    <StyledLang onClick={openList}>
      <StyledLangTitle>
        <StyledLangIcon src="/mypage/lang.png" alt="langicon" />
        {t("current")}
      </StyledLangTitle>
      {openLangList && (
        <StyledLangDropdown>
          <StyledLangButton onClick={changeLanguage} id="ko-KR">
            한국어
          </StyledLangButton>
          <StyledLangButton onClick={changeLanguage} id="en-US">
            English
          </StyledLangButton>
          <StyledLangButton onClick={changeLanguage} id="zh-CN">
            中國語
          </StyledLangButton>
          <StyledLangButton onClick={changeLanguage} id="id-ID">
            bahasa Indonesia
          </StyledLangButton>
          <StyledLangButton onClick={changeLanguage} id="ja-JP">
            日本語
          </StyledLangButton>
          <StyledLangButton onClick={changeLanguage} id="th-TH">
            แบบไทย
          </StyledLangButton>
          <StyledLangButton onClick={changeLanguage} id="vi-VN">
            Tiếng Việt
          </StyledLangButton>
        </StyledLangDropdown>
      )}
    </StyledLang>
  );
};

export default Lang;
