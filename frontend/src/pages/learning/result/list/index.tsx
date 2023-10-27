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

const LearningResultList = () => {
  // 받은 데이터를 기반으로 해야함!

  return (
    <StyledAiList>
      {/* 임시 디자인용 컨테이너 */}
      <StyledAiContainer>
        <StyledAiDateBox>
          <StyledAiDateText>10월 26일</StyledAiDateText>
          <StyledAiBox>
            <StyledAiIcon src="/learning/aibody.png" alt="ai" />
            <StyledAiContent>
              <StyledAiTitle>식당</StyledAiTitle>
              <StyledAiText>친구와 식당에서 밥먹기</StyledAiText>
            </StyledAiContent>
            <StyledAiScore>86점</StyledAiScore>
          </StyledAiBox>
        </StyledAiDateBox>
      </StyledAiContainer>
    </StyledAiList>
  );
};

export default LearningResultList;
