import React, { useEffect, useRef, useState } from "react";
import Sing from "./sing";
import {
  StyledContentText,
  StyledContentTitle,
  StyledContentTopContainer,
  StyledContents,
  StyledContentsBody,
  StyledContentsNav,
  StyledContentsNavButton,
  StyledCotentTopImg,
  StyledMainLogo,
} from "./Contents.styled";
import Drama from "./drama";
import Entertainment from "./entertainment";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import useNavState from "@/stores/nav/useNavState";

const Contents = () => {
  const swiperRef = useRef<any>(null);
  // 다국어
  const { t } = useTranslation();

  const selectcontents = useNavState((state: any) => state.selectcontents);
  const setselectcontents = useNavState(
    (state: any) => state.setselectcontents
  );

  const handleGoContent = (e: any, index: any) => {
    swiperRef.current.swiper.slideTo(index);
    setselectcontents(e.target.id);
  };
  const handleChange = (e: any) => {
    if (e.activeIndex === 0) {
      setselectcontents("sing");
    } else if (e.activeIndex === 1) {
      setselectcontents("drama");
    } else if (e.activeIndex === 2) {
      setselectcontents("entertainment");
    }
  };

  useEffect(() => {
    if (selectcontents === "sing") {
      swiperRef.current.swiper.slideTo(0);
    } else if (selectcontents === "drama") {
      swiperRef.current.swiper.slideTo(1);
    } else if (selectcontents === "entertainment") {
      swiperRef.current.swiper.slideTo(2);
    }
  }, []);

  return (
    <StyledContents initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <StyledContentTopContainer id="sing" selectcontents={selectcontents}>
            <StyledContentTitle>K-POP</StyledContentTitle>
            <StyledContentText id="first">
              {t("contents.sing.topFirst")}
            </StyledContentText>
            <StyledContentText id="second">
              {t("contents.sing.topSecond")}
            </StyledContentText>
          </StyledContentTopContainer>
        </SwiperSlide>
        <SwiperSlide>
          <StyledContentTopContainer id="drama" selectcontents={selectcontents}>
            <StyledContentTitle>K-DRAMA</StyledContentTitle>
            <StyledContentText id="first">
              {t("contents.drama.topFirst")}
            </StyledContentText>
            <StyledContentText id="second">
              {t("contents.drama.topSecond")}
            </StyledContentText>
          </StyledContentTopContainer>
        </SwiperSlide>
        <SwiperSlide>
          <StyledContentTopContainer
            id="entertainment"
            selectcontents={selectcontents}
          >
            <StyledContentTitle>K-SHOW</StyledContentTitle>
            <StyledContentText id="first">
              {t("contents.enter.topFirst")}
            </StyledContentText>
            <StyledContentText id="second">
              {t("contents.enter.topSecond")}
            </StyledContentText>
          </StyledContentTopContainer>
        </SwiperSlide>
      </Swiper>
      <StyledContentsNav>
        <StyledContentsNavButton
          id="sing"
          onClick={(e: any) => handleGoContent(e, 0)}
          selectcontents={selectcontents}
        >
          {t("contents.tap.sing")}
        </StyledContentsNavButton>
        <StyledContentsNavButton
          id="drama"
          onClick={(e: any) => handleGoContent(e, 1)}
          selectcontents={selectcontents}
        >
          {t("contents.tap.drama")}
        </StyledContentsNavButton>
        <StyledContentsNavButton
          id="entertainment"
          onClick={(e: any) => handleGoContent(e, 2)}
          selectcontents={selectcontents}
        >
          {t("contents.tap.enter")}
        </StyledContentsNavButton>
      </StyledContentsNav>
      <StyledContentsBody>
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          onSlideChange={handleChange}
        >
          <SwiperSlide>
            <Sing />
          </SwiperSlide>
          <SwiperSlide>
            <Drama />
          </SwiperSlide>
          <SwiperSlide>
            <Entertainment />
          </SwiperSlide>
        </Swiper>
      </StyledContentsBody>
    </StyledContents>
  );
};

export default Contents;
