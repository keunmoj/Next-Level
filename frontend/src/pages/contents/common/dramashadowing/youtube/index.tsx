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
  StyledSwiperContainer,
  StyledSpeechContainer,
  StyledSpeech,
} from "./Youtube.styled";
import "@/App.css";
import usePlayerStore from "@/stores/youtube/usePlayerStore";
const Youtube = (props: any) => {
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
    <div style={{ height: "100vh" }}>
      <div style={{ width: "100vw", height: "26vh" }}>
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
      </div>
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
      </StyledSpeechContainer>
    </div>
  );
};

export default Youtube;
