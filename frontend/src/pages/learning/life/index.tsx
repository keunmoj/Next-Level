import {
  StyledLearnLife,
  StyledLearnContainer,
  StyledLearnDirectMainBox,
  StyledLearnMainBox,
  StyledLearnIcon,
  StyledLearnContent,
  StyledLearnTitle,
  StyledLearnText,
  StyledLearnButton,
} from "./Life.styled";

const LearningLife = () => {
  return (
    <StyledLearnLife>
      {/* 대화생성 */}
      <StyledLearnContainer>
        <StyledLearnDirectMainBox>
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
          <StyledLearnButton>직접 대화하러가기</StyledLearnButton>
        </StyledLearnDirectMainBox>
      </StyledLearnContainer>

      {/* 식당 */}
      <StyledLearnContainer>
        <StyledLearnMainBox>
          <StyledLearnIcon src="/learning/food.png" alt="food" />
          <StyledLearnContent>
            <StyledLearnTitle>식당</StyledLearnTitle>
            <StyledLearnText>친구와 식당에 갔다</StyledLearnText>
          </StyledLearnContent>
        </StyledLearnMainBox>
      </StyledLearnContainer>

      {/* 헬스장 */}
      <StyledLearnContainer>
        <StyledLearnMainBox>
          <StyledLearnIcon src="/learning/food.png" alt="food" />
          <StyledLearnContent>
            <StyledLearnTitle>헬스장</StyledLearnTitle>
            <StyledLearnText>친구와 식당에 갔다</StyledLearnText>
          </StyledLearnContent>
        </StyledLearnMainBox>
      </StyledLearnContainer>

      {/* 대중교통 */}
      <StyledLearnContainer>
        <StyledLearnMainBox>
          <StyledLearnIcon src="/learning/food.png" alt="food" />
          <StyledLearnContent>
            <StyledLearnTitle>대중교통</StyledLearnTitle>
            <StyledLearnText>친구와 식당에 갔다</StyledLearnText>
          </StyledLearnContent>
        </StyledLearnMainBox>
      </StyledLearnContainer>

      {/* 야구장 */}
      <StyledLearnContainer>
        <StyledLearnMainBox>
          <StyledLearnIcon src="/learning/food.png" alt="food" />
          <StyledLearnContent>
            <StyledLearnTitle>야구장</StyledLearnTitle>
            <StyledLearnText>친구와 식당에 갔다</StyledLearnText>
          </StyledLearnContent>
        </StyledLearnMainBox>
      </StyledLearnContainer>

      {/* 마트 */}
      <StyledLearnContainer>
        <StyledLearnMainBox>
          <StyledLearnIcon src="/learning/food.png" alt="food" />
          <StyledLearnContent>
            <StyledLearnTitle>마트</StyledLearnTitle>
            <StyledLearnText>친구와 식당에 갔다</StyledLearnText>
          </StyledLearnContent>
        </StyledLearnMainBox>
      </StyledLearnContainer>

      {/* 대학 */}
      <StyledLearnContainer>
        <StyledLearnMainBox>
          <StyledLearnIcon src="/learning/food.png" alt="food" />
          <StyledLearnContent>
            <StyledLearnTitle>대학</StyledLearnTitle>
            <StyledLearnText>친구와 식당에 갔다</StyledLearnText>
          </StyledLearnContent>
        </StyledLearnMainBox>
      </StyledLearnContainer>
    </StyledLearnLife>
  );
};

export default LearningLife;
