import { create } from "zustand";

interface userState {
  user: any;
  setUser: (data: any) => void;
}

export const useUserState = create<userState>((set) => ({
  user: [],
  setUser: (data: any) => set(() => ({ user: data })),
}));

export default useUserState;
