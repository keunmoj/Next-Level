import DramaArtistClipGet from "@/api/drama/DramaArtistClipGet";
import { useState } from "react";

export const useDramaArtistCliptGetHook = () => {
  const [dramaAritstClip, setDramaAritstClip] = useState<any>();
  const getDramaAritstClip = async (id: any) => {
    const res = await DramaArtistClipGet(id);
    setDramaAritstClip(res.data.data.clips);
  };
  const [dramaSelectArtistClip, setDramaSelectArtistClip] = useState<any>();
  const getDramaSelectAritstClip = async (id: any) => {
    const res = await DramaArtistClipGet(id);
    setDramaSelectArtistClip(res.data.data.clips);
  };
  return {
    dramaAritstClip,
    getDramaAritstClip,
    dramaSelectArtistClip,
    getDramaSelectAritstClip,
  };
};
