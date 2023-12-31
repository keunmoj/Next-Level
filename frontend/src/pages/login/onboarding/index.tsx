import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  StyledOnboarding,
  StyledOnboardingButtonContainer,
  StyledOnboardingCarousel,
  StyledOnboardingGoogleButton,
  StyledOnboardingGoogleImage,
  StyledOnboardingImage,
  StyledOnboardingNextButton,
  StyledOnboardingPageIndicator,
  StyledOnboardingSkipButton,
} from "./Onboarding.styled";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Onboarding() {
  const [imageList, setImageList] = useState([
    { src: "/onboarding/onboarding1.png", caption: "노래 받아쓰기로 재밌게" },
    { src: "/onboarding/onboarding2.png", caption: "클립을 따라하며 신나게" },
    {
      src: "/onboarding/onboarding3.png",
      caption: "일상대화와 주제를 직접 만들며",
    },
    { src: "/onboarding/onboarding4.png", caption: "내 목소리를 평가해보자" },
    { src: "/onboarding/onboarding5.png", caption: "내 점수는 어디에" },
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = imageList.length;
  const googleLoginUrl = import.meta.env.VITE_GOOGLE_LOGIN_URL;

  const handlePrevClick = () => {
    setCurrentImageIndex(totalImages - 1);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const handleCarouselChange = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <StyledOnboarding>
      <StyledOnboardingCarousel
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        emulateTouch
        swipeable
        onChange={handleCarouselChange}
        selectedItem={currentImageIndex}
        renderIndicator={() => {
          return null;
        }}
      >
        {imageList.map((image, index) => (
          <div key={index}>
            <StyledOnboardingImage src={image.src} alt={image.caption} />
          </div>
        ))}
      </StyledOnboardingCarousel>
      <StyledOnboardingPageIndicator
        total={totalImages}
        current={currentImageIndex}
      />
      <StyledOnboardingButtonContainer>
        {currentImageIndex === totalImages - 1 ? (
          <a href={googleLoginUrl}>
            <StyledOnboardingGoogleButton>
              <StyledOnboardingGoogleImage />
            </StyledOnboardingGoogleButton>
          </a>
        ) : (
          <StyledOnboardingButtonContainer>
            <StyledOnboardingSkipButton onClick={handlePrevClick}>
              건너뛰기
            </StyledOnboardingSkipButton>
            <StyledOnboardingNextButton onClick={handleNextClick}>
              다음
            </StyledOnboardingNextButton>
          </StyledOnboardingButtonContainer>
        )}
      </StyledOnboardingButtonContainer>
    </StyledOnboarding>
  );
}

export default Onboarding;
