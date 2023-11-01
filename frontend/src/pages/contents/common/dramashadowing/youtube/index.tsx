import React, { useRef } from "react";
import YouTube from "react-youtube";
import ProgressBar from "@ramonak/react-progress-bar";
import Record from "../record";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useYoutubeHook } from "@/hooks/drama/useYoutubeHook";
import {
  StyledSwiperContainer,
  StyledSpeechContainer,
  StyledSpeech,
} from "./Youtube.styled";
import { useRecordHook } from "@/hooks/drama/useRecordHook";
import "@/App.css";
import usePlayerStore from "@/stores/youtube/usePlayerStore";
const Youtube = () => {
  const {
    data,
    time,
    fullTime,
    opts,
    onPlayerReady,
    onPlay,
    onPause,
    onStateChange,
  } = useYoutubeHook();
  const setScript = usePlayerStore((state: any) => state.setScript);
  const swiperRef = useRef<any>(null);
  return (
    <div style={{ height: "100vh" }}>
      <div style={{ width: "100vw", height: "26vh" }}>
        <YouTube
          videoId="FMXwmrDTZgk"
          opts={opts}
          onReady={onPlayerReady}
          onPlay={onPlay}
          onPause={onPause}
          onStateChange={onStateChange}
          iframeClassName="iframe"
          className="container"
        />
      </div>
      <ProgressBar
        completed={(time / fullTime) * 100}
        bgColor="black"
        isLabelVisible={false}
        transitionDuration="0.5s"
      />
      <Swiper
        ref={swiperRef}
        navigation={true}
        modules={[Navigation]}
        onSlideChange={() => setScript(" ")}
        centeredSlides
      >
        {data.map((element: any, index: any) => {
          return (
            <SwiperSlide key={element.id}>
              <StyledSwiperContainer>
                <Record data={element} index={index} count={data.length} />
              </StyledSwiperContainer>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <StyledSpeechContainer>
        {data.map((element: any, index: any) => {
          return (
            <StyledSpeech
              onClick={() => swiperRef.current.swiper.slideTo(index)}
              key={element.id}
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
