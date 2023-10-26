import React from "react";
import { useEffect, useState, useRef } from "react";
import YouTube, { YouTubeProps, YouTubePlayer } from "react-youtube";
import ProgressBar from "@ramonak/react-progress-bar";
import Record from "../record";
const Youtube = () => {
  const data = [
    {
      id: 1,
      time: 119,
      script: "다음 주 주말에 만납시다 우리 병원 말고 다른 데서",
    },
    { id: 2, time: 123, script: "치료 받으러 안 올거에요?" },
    { id: 3, time: 125, script: "건강하게 돌아올 테니까 영화 봅시다 나랑" },
    { id: 4, time: 136, script: " 빨리! 시간 없어요. 싫어요? 좋아요?" },
    { id: 5, time: 142, script: "좋아요" },
    { id: 6, time: 145, script: " 약속 한 겁니다" },
  ];
  const [player, setPlayer] = useState<YouTubePlayer | null>(null);
  const [time, setTime] = useState<number>(0);
  const startTime = 119;
  const endTime = 179;
  const fullTime = endTime - startTime;

  // youtube player 생성
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    setPlayer(event.target);
  };

  // 유튜브 프로그레스 바 로직
  const updateProgressBar = async () => {
    if (player) {
      const currentTime = await player.getCurrentTime();
      await setTime(currentTime - startTime);
    }
  };
  // 0.5초 마다 updateProgressBar실행
  useEffect(() => {
    if (player) {
      const interval = setInterval(updateProgressBar, 500);

      return () => {
        clearInterval(interval);
      };
    }
  }, [player]);

  // 클릭 시 해당 시간으로 이동
  const moveTime = (seekTime: number) => {
    if (player) {
      player.seekTo(seekTime, true);
      setTime(seekTime - startTime);
    }
  };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
      start: startTime,
      end: endTime,
      controls: 0,
      disablekb: 1,
      fs: 0,
      rel: 0,
    },
  };
  return (
    <div>
      <YouTube videoId="FMXwmrDTZgk" opts={opts} onReady={onPlayerReady} />
      <ProgressBar
        completed={(time / fullTime) * 100}
        bgColor="black"
        isLabelVisible={false}
        transitionDuration="0.5s"
      />
      {data.map((element: any) => {
        return (
          <div key={element.id}>
            <div onClick={() => moveTime(element.time)}>{element.script}</div>
            <Record
              duration={fullTime}
              data={element}
              moveTime={moveTime}
              player={player}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Youtube;
