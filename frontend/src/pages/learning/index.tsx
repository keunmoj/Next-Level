import {
  StyledLearnTap,
  StyledLearnTapButton,
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
      <StyledLearnTap>
        <StyledLearnTapButton></StyledLearnTapButton>
      </StyledLearnTap>
      <StyledLearnBody>
        <StyledLearnContainer>
          <StyledLearnMainBox>
            <StyledLearnIcon></StyledLearnIcon>
            <StyledLearnContent>
              <StyledLearnTitle></StyledLearnTitle>
              <StyledLearnText></StyledLearnText>
            </StyledLearnContent>
          </StyledLearnMainBox>
        </StyledLearnContainer>
      </StyledLearnBody>
    </StyledLearning>
  );
};

export default Learning;
