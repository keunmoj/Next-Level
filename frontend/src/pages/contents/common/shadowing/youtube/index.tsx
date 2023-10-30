import React from "react";
import YouTube from "react-youtube";
import ProgressBar from "@ramonak/react-progress-bar";
import Record from "../record";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useYoutubeHook } from "@/hooks/drama/useYoutubeHook";
import { StyledSwiperContainer } from "./Youtube.styled";
import { useRecordHook } from "@/hooks/drama/useRecordHook";
const Youtube = () => {
  const { data, player, time, fullTime, opts, onPlayerReady, moveTime } =
    useYoutubeHook();
  const { script, setScript } = useRecordHook();
  console.log(script);
  return (
    <div>
      <YouTube videoId="FMXwmrDTZgk" opts={opts} onReady={onPlayerReady} />
      <ProgressBar
        completed={(time / fullTime) * 100}
        bgColor="black"
        isLabelVisible={false}
        transitionDuration="0.5s"
      />
      <div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          onSlideChange={() => setScript("")}
          centeredSlides
        >
          {data.map((element: any) => {
            return (
              <SwiperSlide key={element.id}>
                <StyledSwiperContainer style={{ display: "flex" }}>
                  <div onClick={() => moveTime(element.time)}>
                    {element.script}
                  </div>
                  <Record data={element} />
                  {script}
                </StyledSwiperContainer>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Youtube;
