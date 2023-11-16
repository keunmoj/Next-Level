import SingPopularArtistListGet from "@/api/sing/SingPopularArtistGet";
import { useEffect, useState } from "react";

export const useAutoLoginHook = () => {
  const [autoLogin, setAutoLogin] = useState(false);
  const getSing = async () => {
    const res = await SingPopularArtistListGet();
    if (res.status === 200) {
      setAutoLogin(true);
    }
  };

  useEffect(() => {
    getSing();
  }, []);
  return { autoLogin };
};
