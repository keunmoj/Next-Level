import React from "react";
import YouTube from "react-youtube";
import ProgressBar from "@ramonak/react-progress-bar";
import Record from "../record";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useYoutubeHook } from "@/hooks/drama/useYoutubeHook";
const Youtube = () => {
  const {
    data,
    player,
    time,
    fullTime,
    script,
    opts,
    setScript,
    onPlayerReady,
    moveTime,
  } = useYoutubeHook();
  return (
    <div>
      <YouTube videoId="FMXwmrDTZgk" opts={opts} onReady={onPlayerReady} />
      <ProgressBar
        completed={(time / fullTime) * 100}
        bgColor="black"
        isLabelVisible={false}
        transitionDuration="0.5s"
      />
      <Swiper
        navigation={true}
        modules={[Navigation]}
        onSlideChange={() => setScript("")}
      >
        {data.map((element: any) => {
          return (
            <SwiperSlide key={element.id}>
              <div onClick={() => moveTime(element.time)}>{element.script}</div>
              <Record
                duration={fullTime}
                data={element}
                moveTime={moveTime}
                player={player}
                setScript={setScript}
              />
              {script}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Youtube;
