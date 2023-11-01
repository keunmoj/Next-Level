import React, { useEffect, useRef } from "react";
import YouTube from "react-youtube";
import ProgressBar from "@ramonak/react-progress-bar";
import Record from "../record";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  StyledSwiperContainer,
  StyledSpeechContainer,
  StyledSpeech,
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
    <div style={{ height: "100vh" }}>
      <div style={{ width: "100vw", height: "26vh" }}>
        <YouTube
          videoId={entertainment?.videoId}
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

      <div>
        <StyledSwiperContainer>
          <Record data={entertainment} />
        </StyledSwiperContainer>
      </div>

      {/* <StyledSpeechContainer>
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
      </StyledSpeechContainer> */}
    </div>
  );
};

export default Youtube;
