import { create } from "zustand";

const useAiResultStore = create((set) => ({
  totalScoreList: [],
  setTotalScoreList: (data: number) =>
    set((prevState: any) => ({
      totalScoreList: [...prevState.totalScoreList, data],
    })),
  totalScriptList: [],
  setTotalSCriptList: (data: any) =>
    set((prevState: any) => ({
      totalScriptList: [...prevState.totalScriptList, data],
    })),
  resetTotalScoreList: () => set(() => ({ totalScoreList: [] })),
  resetTotalScriptList: () => set(() => ({ totalScriptList: [] })),
}));

export default useAiResultStore;
