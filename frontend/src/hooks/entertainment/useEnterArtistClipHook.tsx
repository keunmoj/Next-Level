import EnterArtistClipGet from "@/api/entertainment/EnterArtistClipGet";
import { useState } from "react";

export const useEnterArtistCliptGetHook = () => {
  const [enterAritstClip, setEnterAritstClip] = useState<any>();
  const getEnterAritstClip = async (id: any) => {
    const res = await EnterArtistClipGet(id);
    setEnterAritstClip(res.data.data.problems);
  };
  const [enterSelectArtistClip, setEnterSelectArtistClip] = useState<any>();
  const getEnterSelectAritstClip = async (id: any) => {
    const res = await EnterArtistClipGet(id);
    setEnterSelectArtistClip(res.data.data.problems);
  };
  return {
    enterAritstClip,
    getEnterAritstClip,
    enterSelectArtistClip,
    getEnterSelectAritstClip,
  };
};
