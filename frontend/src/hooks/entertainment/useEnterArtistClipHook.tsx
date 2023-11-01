import EnterArtistClipGet from "@/api/entertainment/EnterArtistClipGet";
import { useState } from "react";

export const useEnterArtistCliptGetHook = () => {
  const [enterAritstClip, setEnterAritstClip] = useState<any>();
  const getEnterAritstClip = async (id: any) => {
    console.log("hookprop", id);
    const res = await EnterArtistClipGet(id);
    setEnterAritstClip(res.data.clipList);
    console.log("hook에서 id 받은 결과", res);
  };
  const [enterSelectArtistClip, setEnterSelectArtistClip] = useState<any>();
  const getEnterSelectAritstClip = async (id: any) => {
    const res = await EnterArtistClipGet(id);
    setEnterSelectArtistClip(res.data.clipList);
    console.log("12333", res);
  };
  return {
    enterAritstClip,
    getEnterAritstClip,
    enterSelectArtistClip,
    getEnterSelectAritstClip,
  };
};
