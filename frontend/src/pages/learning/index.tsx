import {
  StyledLearnNav,
  StyledLearnNavButton,
  StyledLearning,
  StyledLearnBody,
  StyledLearnContainer,
  StyledLearnMainBox,
  StyledLearnIcon,
  StyledLearnTitle,
  StyledLearnText,
  StyledLearnContent,
} from "./Learning.styled";

const Learning = () => {
  return (
    <StyledLearning>
      {/* 상단 탭바 */}
      <StyledLearnNav>
        <StyledLearnNavButton>학습</StyledLearnNavButton>
        <StyledLearnNavButton>AI 결과</StyledLearnNavButton>
      </StyledLearnNav>

      {/* 학습 내용 선택 */}
      <StyledLearnBody>
        <StyledLearnContainer>
          <StyledLearnMainBox>
            <StyledLearnIcon src="/learning/aibody.png" alt="food" />
            <StyledLearnContent>
              <StyledLearnTitle>직접 대화해보세요!</StyledLearnTitle>
              <StyledLearnText>
                원하는 상황이 있나요? 직접 챗봇과 대화하며 한국어를
                공부해보세요!
              </StyledLearnText>
            </StyledLearnContent>
          </StyledLearnMainBox>
        </StyledLearnContainer>
      </StyledLearnBody>
    </StyledLearning>
  );
};

export default Learning;
