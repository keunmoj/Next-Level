import { useNavigate } from "react-router-dom";
import {
  StyledAiList,
  StyledAiContainer,
  StyledAiDateBox,
  StyledAiBox,
  StyledAiIcon,
  StyledAiContent,
  StyledAiTitle,
  StyledAiText,
  StyledAiDateText,
  StyledAiScore,
} from "./List.styled";
import { useSituationResultGetHook } from "@/hooks/mypage/useSituationResultGetHook";
import { useEffect } from "react";
import { S3_ADDRESS } from "@/api/api";

const LearningResultList = () => {
  const navigate = useNavigate();

  const goDetailResult = (card: any) => {
    navigate("/learning/resultdetail", {
      state: { card },
    });
  };

  const { result, getSituationResult } = useSituationResultGetHook();

  useEffect(() => {
    getSituationResult();
  }, []);

  useEffect(() => {
    console.log(result);
  }, []);

  return (
    <StyledAiList>
      <StyledAiContainer>
        <StyledAiDateBox>
          {result?.map((card: any) => {
            return (
              <StyledAiBox onClick={() => goDetailResult(card)} key={card.id}>
                <StyledAiIcon src={S3_ADDRESS + card.image} alt="ai" />
                <StyledAiContent>
                  <StyledAiTitle>{card.title}</StyledAiTitle>
                  <StyledAiText>학습 날짜 : {card.date}</StyledAiText>
                </StyledAiContent>
                <StyledAiScore>{card.score}점</StyledAiScore>
              </StyledAiBox>
            );
          })}
        </StyledAiDateBox>
      </StyledAiContainer>
    </StyledAiList>
  );
};

export default LearningResultList;
