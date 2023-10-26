import { useEffect, useState } from "react";
import YouTube, { YouTubeProps, YouTubePlayer } from "react-youtube";
import ProgressBar from "@ramonak/react-progress-bar";

const Shadowing = () => {
  const [player, setPlayer] = useState<YouTubePlayer | null>(null);
  const [time, setTime] = useState<number>(0);
  const startTime = 119;
  const endTime = 179;
  const fullTime = endTime - startTime;

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    setPlayer(event.target);
  };

  const updateProgressBar = async () => {
    if (player) {
      const currentTime = await player.getCurrentTime();
      await setTime(currentTime - startTime);
    }
  };
  useEffect(() => {
    if (player) {
      const interval = setInterval(updateProgressBar, 500);

      return () => {
        clearInterval(interval);
      };
    }
  }, [player]);

  const onClick = (seekTime: number) => {
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
      <div onClick={() => onClick(119)} style={{ cursor: "pointer" }}>
        1:59 다음 주 주말에 만납시다 우리 병원 말고 다른 데서
      </div>
      <div onClick={() => onClick(123)} style={{ cursor: "pointer" }}>
        2:03 치료 받으러 안 올거에요?
      </div>
    </div>
  );
};

export default Shadowing;
