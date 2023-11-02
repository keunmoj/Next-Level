import { useEffect, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import usePlayerStore from "@/stores/youtube/usePlayerStore";
import DramaGet from "@/api/drama/DramaGet";

interface Data {
  id: number | null;
  time: number | null;
  script: string | null;
}
export const useDramaYoutubeHook = () => {
  const [drama, setDrama] = useState<any>();
  const getDrama = async (id: any) => {
    const res = await DramaGet(id);
    setDrama(res.data.data);
  };

  const player = usePlayerStore((state: any) => state.player);
  const setPlayer = usePlayerStore((state: any) => state.setPlayer);
  const [time, setTime] = useState<number>(0);
  const startTime = drama?.clipStartTime;
  const endTime = drama?.clipEndTime;
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
  // const [isPlay, setIsplay] = useState(false);
  const isPlay = usePlayerStore((state: any) => state.isPlay);
  const setIsPlay = usePlayerStore((state: any) => state.setIsPlay);
  const onPlay = () => {
    player.playVideo();
    setIsPlay(true);
  };
  const onPause = () => {
    player.pauseVideo();
    setIsPlay(false);
  };
  const onEnd = () => {
    player.pauseVideo();
    setIsPlay(false);
    player.seekTo(startTime, true);
  };
  const onStateChange: YouTubeProps["onStateChange"] = (event) => {
    if (event.data === 0 || event.data === 2) {
      setIsPlay(true);
    } else {
      setIsPlay(false);
    }
  };

  return {
    player,
    time,
    fullTime,
    opts,
    isPlay,
    drama,
    onPlayerReady,
    moveTime,
    onPlay,
    onPause,
    onEnd,
    onStateChange,
    getDrama,
  };
};
