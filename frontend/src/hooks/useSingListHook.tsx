import { useEffect, useState } from "react";
import SingListGet from "@/api/sing/SingPopularListGet";

export const useSingListHook = () => {
  const [singList, setSingList] = useState<any>([]);

  useEffect(() => {
    const getSingList = async () => {
      const response = await SingListGet();
      setSingList(response);
    };
    getSingList();
  }, []);

  return { singList };
};
