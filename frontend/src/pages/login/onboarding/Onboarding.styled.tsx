import styled, { css } from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { PageIndicator } from "antd-mobile";

type StyledOnboardingCaptionProps = {
  isActive: boolean;
};

const StyledOnboarding = styled.div`
  position: absolute;
  top: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

const StyledOnboardingCarousel = styled(Carousel)`
  min-width: 100%;
  margin-bottom: 5px;

  .carousel {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const StyledOnboardingPageIndicator = styled(PageIndicator)`
  margin-top: 10px;
  margin-bottom: 20px;
  --dot-color: #bec0c2;
  --active-dot-color: #3f7bfd;
  --dot-size: 10px;
  --active-dot-size: 30px;
  --dot-border-radius: 50%;
  --active-dot-border-radius: 15px;
  --dot-spacing: 8px;
`;

const StyledOnboardingImage = styled.img.attrs<any>(() => ({}))`
  height: 85vh;
  object-fit: contain;
`;

const StyledOnboardingButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
  height: 45px;
  bottom: 0;
  align-items: center;
`;

const StyledOnboardingGoogleButton = styled.div`
  width: 80vw;
  height: 45px;
  background-color: white;
  text-align: center;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledOnboardingGoogleImage = styled.img.attrs({
  src: "/google/google_login_button.svg",
  alt: "google login",
})`
  width: 60vw;
`;

const StyledOnboardingSkipButton = styled.div`
  font-size: 18px;
  color: rgb(139, 136, 136);
  text-align: center;
`;

const StyledOnboardingNextButton = styled.div`
  font-size: 18px;
  color: var(--color-join-point);
  font-weight: bold;
  text-align: center;
`;

export {
  StyledOnboarding,
  StyledOnboardingCarousel,
  StyledOnboardingPageIndicator,
  StyledOnboardingImage,
  StyledOnboardingButtonContainer,
  StyledOnboardingGoogleButton,
  StyledOnboardingGoogleImage,
  StyledOnboardingSkipButton,
  StyledOnboardingNextButton,
};
