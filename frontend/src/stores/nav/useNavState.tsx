import { create } from "zustand";

interface NavState {
  selectcontents: string;
  setselectcontents: (data: any) => void;
  selectbottomnav: string;
  setSelectBottomNav: (data: any) => void;
}

export const useNavState = create<NavState>((set) => ({
  selectcontents: "sing",
  setselectcontents: (data) => set(() => ({ selectcontents: data })),
  selectbottomnav: "contents",
  setSelectBottomNav: (data) => set(() => ({ selectbottomnav: data })),
}));

export default useNavState;
