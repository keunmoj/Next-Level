import React, { useEffect, useRef } from "react";
import YouTube from "react-youtube";
import ProgressBar from "@ramonak/react-progress-bar";
import Record from "../record";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useDramaYoutubeHook } from "@/hooks/drama/useDramaYoutubeHook";
import {
  StyledYoutubeContainer,
  StyledSwiperContainer,
  StyledSpeechContainer,
  StyledSpeech,
  StyledSpeechBox,
  StyledSpeechTitle,
} from "./Youtube.styled";
import "@/App.css";
import usePlayerStore from "@/stores/youtube/usePlayerStore";
import { useTranslation } from "react-i18next";
const Youtube = (props: any) => {
  const { t } = useTranslation();
  const {
    drama,
    time,
    fullTime,
    opts,
    onPlayerReady,
    onPlay,
    onPause,
    onEnd,
    onStateChange,
    getDrama,
  } = useDramaYoutubeHook();
  useEffect(() => {
    getDrama(props.id);
  }, []);
  useEffect(() => {
    console.log("123", drama);
  }, [drama]);
  const setScript = usePlayerStore((state: any) => state.setScript);
  const swiperRef = useRef<any>(null);
  return (
    <>
      <StyledYoutubeContainer>
        <YouTube
          videoId={drama?.videoId}
          opts={opts}
          onReady={onPlayerReady}
          onPlay={onPlay}
          onPause={onPause}
          onEnd={onEnd}
          onStateChange={onStateChange}
          iframeClassName="iframe"
          className="container"
        />
      </StyledYoutubeContainer>
      <ProgressBar
        completed={(time / fullTime) * 100}
        bgColor="#FF0000"
        isLabelVisible={false}
        transitionDuration="0.5s"
        borderRadius="0"
        height="0.5vh"
      />
      <Swiper
        ref={swiperRef}
        navigation={true}
        modules={[Navigation]}
        onSlideChange={() => setScript(" ")}
        centeredSlides
      >
        {drama?.scripts.map((element: any, index: any) => {
          return (
            <SwiperSlide key={element.scriptNumber}>
              <StyledSwiperContainer>
                <Record
                  data={element}
                  index={index}
                  count={drama.scripts.length}
                />
              </StyledSwiperContainer>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <StyledSpeechContainer>
        <StyledSpeechTitle>
          {t("contents.shadowing.totalSpeech")}
        </StyledSpeechTitle>
        <StyledSpeechBox>
          {drama?.scripts.map((element: any, index: any) => {
            return (
              <StyledSpeech
                onClick={() => swiperRef.current.swiper.slideTo(index)}
                key={element.scriptNumber}
              >
                {element.script}
              </StyledSpeech>
            );
          })}
        </StyledSpeechBox>
      </StyledSpeechContainer>
    </>
  );
};

export default Youtube;
