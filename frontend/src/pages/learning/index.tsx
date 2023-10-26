import { useEffect, useState } from "react";
import {
  StyledLearnBody,
  StyledLearnNav,
  StyledLearnNavButton,
  StyledLearning,
} from "./Learning.styled";
import LearningLife from "./life";
import LearningResultList from "./result/list";

const Learning = () => {
  // 학습 네브바에서 학습/ai결과 컴포넌트 변경
  const [selectLearn, setSelectLearn] = useState("learning");

  const goLearn = (e: any) => {
    setSelectLearn(e.target.id);
  };

  useEffect(() => {}, [selectLearn]);

  return (
    <StyledLearning>
      {/* 상단 탭바 */}
      <StyledLearnNav>
        <StyledLearnNavButton id="learning" onClick={goLearn}>
          학습
        </StyledLearnNavButton>
        <StyledLearnNavButton id="learningresultlist" onClick={goLearn}>
          AI 결과
        </StyledLearnNavButton>
      </StyledLearnNav>

      {/* 학습 내용 선택 */}
      <StyledLearnBody>
        {selectLearn === "learning" && <LearningLife />}
        {selectLearn === "learningresultlist" && <LearningResultList />}
      </StyledLearnBody>
    </StyledLearning>
  );
};

export default Learning;
