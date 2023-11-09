import { create } from "zustand";

const useAiResultStore = create((set) => ({
  totalScoreList: [],
  setTotalScoreList: (data: any) =>
    set((prevState: any) => ({
      totalScoreList: [...prevState.totalScoreList, data],
    })),

  totalEverageScore: "",
  setTotalEverageScore: () =>
    set((state: any) => ({ totalEverageScore: state })),
}));

export default useAiResultStore;
