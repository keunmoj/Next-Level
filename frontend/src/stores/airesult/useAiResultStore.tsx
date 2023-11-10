import { create } from "zustand";

const useAiResultStore = create((set) => ({
  totalScoreList: [],
  setTotalScoreList: (data: any) =>
    set((prevState: any) => ({
      totalScoreList: [...prevState.totalScoreList, data],
    })),
  totalScriptList: [],
  setTotalSCriptList: (data: any) =>
    set((prevState: any) => ({
      totalScriptList: [...prevState.totalScriptList, data],
    })),
}));

export default useAiResultStore;
