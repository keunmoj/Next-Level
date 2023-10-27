import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  StyledOnboarding,
  StyledOnboardingButtonContainer,
  StyledOnboardingCaption,
  StyledOnboardingCarousel,
  StyledOnboardingGoogleButton,
  StyledOnboardingImage,
  StyledOnboardingNextButton,
  StyledOnboardingPageIndicator,
  StyledOnboardingSkipButton,
} from "./Onboarding.styled";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Onboarding() {
  const [imageList, setImageList] = useState([
    { src: "/bottomNav/contentsbutton.png", caption: "1번" },
    { src: "/bottomNav/learnbutton.png", caption: "2번" },
    { src: "/bottomNav/mypagebutton.png", caption: "3번" },
    { src: "/bottomNav/rankingbutton.png", caption: "4번" },
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = imageList.length;

  const handlePrevClick = () => {
    setCurrentImageIndex(totalImages - 1);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const handleCarouselChange = (index: number) => {
    setCurrentImageIndex(index);
  };

  // 로그인 만들기 전 화면이동시켜줄려고 넣은 코드 만들고 나중에 지워야함.
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/addinformation");
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
      {imageList.map((image, index) => (
        <StyledOnboardingCaption
          isActive={currentImageIndex === index ? true : false}
        >
          {image.caption}
        </StyledOnboardingCaption>
      ))}

      <StyledOnboardingPageIndicator
        total={totalImages}
        current={currentImageIndex}
      />
      <StyledOnboardingButtonContainer>
        {currentImageIndex === totalImages - 1 ? (
          <a href="" onClick={handleClick}>
            <StyledOnboardingGoogleButton>
              <img src="" alt="google login" />
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
