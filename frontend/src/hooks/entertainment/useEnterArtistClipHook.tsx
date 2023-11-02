import EnterArtistClipGet from "@/api/entertainment/EnterArtistClipGet";
import { useState } from "react";

export const useEnterArtistCliptGetHook = () => {
  const [enterAritstClip, setEnterAritstClip] = useState<any>();
  const getEnterAritstClip = async (id: any) => {
    const res = await EnterArtistClipGet(id);
    setEnterAritstClip(res.data.data.clips);
  };
  const [enterSelectArtistClip, setEnterSelectArtistClip] = useState<any>();
  const getEnterSelectAritstClip = async (id: any) => {
    const res = await EnterArtistClipGet(id);
    setEnterSelectArtistClip(res.data.data.clips);
  };
  return {
    enterAritstClip,
    getEnterAritstClip,
    enterSelectArtistClip,
    getEnterSelectAritstClip,
  };
};
