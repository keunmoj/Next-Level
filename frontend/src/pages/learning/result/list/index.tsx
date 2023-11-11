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
  // 받은 데이터를 기반으로 해야함!
  const goDetailResult = (e: any) => {
    navigate("/learning/resultdetail", {
      state: { situationProblemId: e.target.id },
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
      {/* 임시 디자인용 컨테이너 */}
      <StyledAiContainer>
        <StyledAiDateBox>
          <StyledAiDateText>10월 26일</StyledAiDateText>
          {result?.map((card: any) => {
            return (
              <StyledAiBox onClick={goDetailResult} key={card.id} id={card.id}>
                <StyledAiIcon
                  src={S3_ADDRESS + card.image}
                  alt="ai"
                  id={card.id}
                />
                <StyledAiContent id={card.id}>
                  <StyledAiTitle id={card.id}>{card.title}</StyledAiTitle>
                  <StyledAiText id={card.id}>
                    친구와 식당에서 밥먹기
                  </StyledAiText>
                </StyledAiContent>
                <StyledAiScore id={card.id}>{card.score}점</StyledAiScore>
              </StyledAiBox>
            );
          })}
        </StyledAiDateBox>
      </StyledAiContainer>
    </StyledAiList>
  );
};

export default LearningResultList;
