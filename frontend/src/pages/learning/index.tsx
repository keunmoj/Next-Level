import { useEffect, useState } from "react";
import {
  StyledLearnBody,
  StyledLearnNav,
  StyledLearnNavButton,
  StyledLearning,
} from "./Learning.styled";
import LearningLife from "./life";
import LearningResultList from "./result/list";
import { useTranslation } from "react-i18next";

const Learning = () => {
  const { t } = useTranslation();
  // 학습 네브바에서 학습/ai결과 컴포넌트 변경
  const [selectlearn, setselectlearn] = useState("learning");

  const goLearn = (e: any) => {
    setselectlearn(e.target.id);
  };

  useEffect(() => {}, [selectlearn]);

  return (
    <StyledLearning initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {/* 상단 탭바 */}
      <StyledLearnNav>
        <StyledLearnNavButton
          id="learning"
          onClick={goLearn}
          selectlearn={selectlearn}
        >
          {t("learning.tap.life")}
        </StyledLearnNavButton>
        <StyledLearnNavButton
          id="learningresultlist"
          onClick={goLearn}
          selectlearn={selectlearn}
        >
          {t("learning.tap.ai")}
        </StyledLearnNavButton>
      </StyledLearnNav>

      {/* 학습 내용 선택 */}
      <StyledLearnBody>
        {selectlearn === "learning" && <LearningLife />}
        {selectlearn === "learningresultlist" && <LearningResultList />}
      </StyledLearnBody>
    </StyledLearning>
  );
};

export default Learning;
