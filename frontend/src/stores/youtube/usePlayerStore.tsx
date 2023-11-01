import { create } from "zustand";
import { YouTubePlayer } from "react-youtube";
interface usePlayer {
  player: YouTubePlayer | null;
  setPlayer: (data: YouTubePlayer | null) => void;
  isPlay: boolean;
  setIsPlay: (data: boolean) => void;
  script: string;
  setScript: (data: string) => void;
}

export const usePlayerStore = create<usePlayer>((set) => ({
  player: null,
  setPlayer: (data: YouTubePlayer | null) => set(() => ({ player: data })),
  isPlay: false,
  setIsPlay: (data: boolean) => set(() => ({ isPlay: data })),
  script: "",
  setScript: (data: string) => set(() => ({ script: data })),
}));

export default usePlayerStore;
