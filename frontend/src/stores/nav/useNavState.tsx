import { create } from "zustand";

interface NavState {
  selectcontents: string;
  setselectcontents: (data: any) => void;
  selectbottomnav: string;
  setSelectBottomNav: (data: any) => void;
  selectlearn: string;
  setselectlearn: (data: any) => void;
  myPageState: string;
  setMyPageState: (data: any) => void;
}

export const useNavState = create<NavState>((set) => ({
  selectcontents: "sing",
  setselectcontents: (data) => set(() => ({ selectcontents: data })),
  selectbottomnav: "contents",
  setSelectBottomNav: (data) => set(() => ({ selectbottomnav: data })),
  selectlearn: "learning",
  setselectlearn: (data) => set(() => ({ selectlearn: data })),
  myPageState: "shadowing",
  setMyPageState: (data) => set(() => ({ myPageState: data })),
}));

export default useNavState;
