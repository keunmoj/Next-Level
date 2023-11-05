import React, { useEffect, useState } from "react";
import {
  StyledMyLearningComponent,
  StyledMyLearningTitle,
  StyledMyLearningButton,
} from "./MyLearning.styled";
import MyShadowing from "../myshadowing";
import MySing from "../mysing";
import MyAI from "../myai";

const Mylearning = () => {
  const [state, setState] = useState("shadowing");
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <StyledMyLearningComponent>
      <StyledMyLearningTitle>
        <StyledMyLearningButton
          id="shadowing"
          onClick={(e: any) => setState(e.target.id)}
          state={state}
        >
          내 쉐도잉
        </StyledMyLearningButton>
        <StyledMyLearningButton
          id="sing"
          onClick={(e: any) => setState(e.target.id)}
          state={state}
        >
          내 노래
        </StyledMyLearningButton>
        <StyledMyLearningButton
          id="ai"
          onClick={(e: any) => setState(e.target.id)}
          state={state}
        >
          AI 분석
        </StyledMyLearningButton>
      </StyledMyLearningTitle>
      {state === "shadowing" && <MyShadowing></MyShadowing>}
      {state === "sing" && <MySing></MySing>}
      {state === "ai" && <MyAI></MyAI>}
    </StyledMyLearningComponent>
  );
};

export default Mylearning;
