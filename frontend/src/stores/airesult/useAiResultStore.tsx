import { create } from "zustand";

const useAiResultStore = create((set) => ({
  totalScoreList: [],
  setTotalScoreList: (data: any) =>
    set((prevState: any) => ({
      totalScoreList: [...prevState.totalScoreList, data],
    })),
}));

export default useAiResultStore;
