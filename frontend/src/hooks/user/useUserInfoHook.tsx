import userInfoGet from "@/api/user/userInfoGet";
import useUserState from "@/stores/main/useUserState";
import { useState } from "react";

export const useUserInfoHook = () => {
  const user = useUserState((state: any) => state.user);
  const setUser = useUserState((state: any) => state.setUser);
  const getUserInfo = async () => {
    const res = await userInfoGet();
    setUser(res.data.data);
  };
  return { getUserInfo };
};
