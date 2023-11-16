import { create } from "zustand";
import { YouTubePlayer } from "react-youtube";
interface usePlayer {
  player: YouTubePlayer | null;
  setPlayer: (data: YouTubePlayer | null) => void;
  isPlay: boolean;
  setIsPlay: (data: boolean) => void;
  script: string;
  setScript: (data: string) => void;
  isRecord: boolean;
  setIsRecord: (data: boolean) => void;
}

export const usePlayerStore = create<usePlayer>((set) => ({
  player: null,
  setPlayer: (data: YouTubePlayer | null) => set(() => ({ player: data })),
  isPlay: false,
  setIsPlay: (data: boolean) => set(() => ({ isPlay: data })),
  script: "",
  setScript: (data: string) => set(() => ({ script: data })),
  isRecord: false,
  setIsRecord: (data: boolean) => set(() => ({ isRecord: data })),
}));

export default usePlayerStore;
