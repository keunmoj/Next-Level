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
  useEffect(() => {
    console.log(entertainment);
  }, [entertainment]);
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
        <StyledSpeech>
          금방 사랑에 빠지는 사람"을 가리키는 신조어입니다. 금사빠는 어떤 사람이
          다른 사람에게 빨리 사랑에 빠지거나 감동을 받는 경향을 묘사하는
          표현으로 사용됩니다. 금사빠는 감정적이며, 빠르게 호감을 느끼고 연인을
          만나면 빠르게 호감을 품게 되는 사람을 묘사하는데 사용됩니다. 이 용어는
          유머스럽게 사용되기도 하며, 다른 사람의 연애 경험이나 행동을 놀리거나
          비하하기 위해도 사용될 수 있습니다.
        </StyledSpeech>
      </StyledSpeechContainer>
    </>
  );
};

export default Youtube;
