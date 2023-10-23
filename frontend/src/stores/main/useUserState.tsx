import { create } from "zustand";

interface userState {
  state: number;
  increment: () => void;
}

export const useUserState = create<userState>((set) => ({
  state: 0,
  increment: () => set((state) => ({ state: state.state + 1 })),
}));

export default useUserState;
