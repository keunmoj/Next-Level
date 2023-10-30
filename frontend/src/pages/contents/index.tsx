import React, { useEffect, useState } from "react";
import Sing from "./sing";
import {
  StyledContents,
  StyledContentsBody,
  StyledContentsNav,
  StyledContentsNavButton,
} from "./Contents.styled";
import Drama from "./drama";
import Entertainment from "./entertainment";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Contents = () => {
  // 다국어
  const { t } = useTranslation();

  // 콘텐츠 네브바에서 노래/드라마/예능 클릭시 컴포넌트 변경
  const [selectContents, setSelectContents] = useState("sing");

  const goContents = (e: any) => {
    setSelectContents(e.target.id);
  };

  useEffect(() => {}, [selectContents]);

  return (
    <StyledContents initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <StyledContentsNav>
        <StyledContentsNavButton
          id="sing"
          onClick={goContents}
          selectContents={selectContents}
        >
          {t("contents.tap.sing")}
        </StyledContentsNavButton>
        <StyledContentsNavButton
          id="drama"
          onClick={goContents}
          selectContents={selectContents}
        >
          {t("contents.tap.drama")}
        </StyledContentsNavButton>
        <StyledContentsNavButton
          id="entertainment"
          onClick={goContents}
          selectContents={selectContents}
        >
          {t("contents.tap.enter")}
        </StyledContentsNavButton>
      </StyledContentsNav>
      <StyledContentsBody>
        {selectContents === "sing" && <Sing />}
        {selectContents === "drama" && <Drama />}
        {selectContents === "entertainment" && <Entertainment />}
      </StyledContentsBody>
    </StyledContents>
  );
};

export default Contents;
