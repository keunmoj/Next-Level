import React, { useEffect, useRef } from "react";
import YouTube from "react-youtube";
import ProgressBar from "@ramonak/react-progress-bar";
import Record from "../record";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  StyledYoutubeContainer,
  StyledSwiperContainer,
  StyledSpeechContainer,
  StyledSpeechBox,
  StyledSpeech,
  StyledSpeechTitle,
} from "./Youtube.styled";
import "@/App.css";
import usePlayerStore from "@/stores/youtube/usePlayerStore";
import { useEnterYoutubeHook } from "@/hooks/entertainment/useEnterYoutubeHook";
const Youtube = (props: any) => {
  const {
    entertainment,
    time,
    fullTime,
    opts,
    onPlayerReady,
    onPlay,
    onPause,
    onEnd,
    onStateChange,
    getEntertainment,
  } = useEnterYoutubeHook();
  useEffect(() => {
    getEntertainment(props.id);
  }, []);

  const setScript = usePlayerStore((state: any) => state.setScript);
  const swiperRef = useRef<any>(null);
  return (
    <>
      <StyledYoutubeContainer>
        <YouTube
          videoId={entertainment?.videoId}
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
      <Record data={entertainment} />
      <StyledSpeechContainer>
        <StyledSpeechTitle>상황 설명</StyledSpeechTitle>
        <StyledSpeech>{entertainment?.explain}</StyledSpeech>
      </StyledSpeechContainer>
    </>
  );
};

export default Youtube;
