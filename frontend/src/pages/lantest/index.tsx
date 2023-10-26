import React from "react";
import { useTranslation } from "react-i18next";

const Test = () => {
  const { t, i18n } = useTranslation();

  const changeLanguageToKo = (e: any) => {
    i18n.changeLanguage(`${e.target.id}`);
  };

  return (
    <>
      <div>테스트 : {t("test")}</div>
      <button onClick={changeLanguageToKo} id="ko-KR">
        한국어
      </button>
      <button onClick={changeLanguageToKo} id="en-US">
        영어
      </button>
    </>
  );
};

export default Test;
