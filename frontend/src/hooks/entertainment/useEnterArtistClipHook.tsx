import EnterArtistClipGet from "@/api/entertainment/EnterArtistClipGet";
import { useState } from "react";

export const useEnterArtistCliptGetHook = () => {
  const [enterAritstClip, setEnterAritstClip] = useState<any>();
  const getEnterAritstClip = async (id: any) => {
    const res = await EnterArtistClipGet(id);
    setEnterAritstClip(res.data.clipList);
    // console.log(res.data);
  };
  const [enterSelectArtistClip, setEnterSelectArtistClip] = useState<any>();
  const getEnterSelectAritstClip = async (id: any) => {
    const res = await EnterArtistClipGet(id);
    setEnterSelectArtistClip(res.data.clipList);
    // console.log(res.data);
  };
  return {
    enterAritstClip,
    getEnterAritstClip,
    enterSelectArtistClip,
    getEnterSelectAritstClip,
  };
};
