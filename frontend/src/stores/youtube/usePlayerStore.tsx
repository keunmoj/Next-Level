import { create } from "zustand";
import { YouTubePlayer } from "react-youtube";
interface usePlayer {
  player: YouTubePlayer | null;
  setPlayer: (data: YouTubePlayer | null) => void;
}

export const usePlayerStore = create<usePlayer>((set) => ({
  player: null,
  setPlayer: (data: YouTubePlayer | null) => set(() => ({ player: data })),
}));

export default usePlayerStore;
