import React, { useEffect, useState } from "react";
import Sing from "./sing";
import {
  StyledContentTopContainer,
  StyledContents,
  StyledContentsBody,
  StyledContentsNav,
  StyledContentsNavButton,
} from "./Contents.styled";
import Drama from "./drama";
import Entertainment from "./entertainment";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";

const Contents = () => {
  //axios
  // axios
  //   .get("http://k9e204.p.ssafy.io/api/song")
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // 다국어
  const { t } = useTranslation();

  // 콘텐츠 네브바에서 노래/드라마/예능 클릭시 컴포넌트 변경
  const [selectcontents, setselectcontents] = useState("sing");

  const goContents = (e: any) => {
    setselectcontents(e.target.id);
  };

  useEffect(() => {}, [selectcontents]);

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
          <StyledContentTopContainer
            id="sing"
            onClick={goContents}
            selectcontents={selectcontents}
          >
            k-pop
          </StyledContentTopContainer>
        </SwiperSlide>
        <SwiperSlide>
          <StyledContentTopContainer
            id="drama"
            onClick={goContents}
            selectcontents={selectcontents}
          >
            k-drama
          </StyledContentTopContainer>
        </SwiperSlide>
        <SwiperSlide>
          <StyledContentTopContainer
            id="entertainment"
            onClick={goContents}
            selectcontents={selectcontents}
          >
            k-show
          </StyledContentTopContainer>
        </SwiperSlide>
      </Swiper>
      <StyledContentsNav>
        <StyledContentsNavButton
          id="sing"
          onClick={goContents}
          selectcontents={selectcontents}
        >
          {t("contents.tap.sing")}
        </StyledContentsNavButton>
        <StyledContentsNavButton
          id="drama"
          onClick={goContents}
          selectcontents={selectcontents}
        >
          {t("contents.tap.drama")}
        </StyledContentsNavButton>
        <StyledContentsNavButton
          id="entertainment"
          onClick={goContents}
          selectcontents={selectcontents}
        >
          {t("contents.tap.enter")}
        </StyledContentsNavButton>
      </StyledContentsNav>
      <StyledContentsBody>
        {selectcontents === "sing" && <Sing />}
        {selectcontents === "drama" && <Drama />}
        {selectcontents === "entertainment" && <Entertainment />}
      </StyledContentsBody>
    </StyledContents>
  );
};

export default Contents;
