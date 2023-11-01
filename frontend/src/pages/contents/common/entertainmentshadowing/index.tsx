import { useParams } from "react-router-dom";
import Youtube from "./youtube";

import { useEffect, useState } from "react";
import { useEnterYoutubeHook } from "@/hooks/entertainment/useEnterYoutubeHook";

const Shadowing = () => {
  const { id } = useParams();

  return (
    <div>
      <Youtube id={id} />
    </div>
  );
};

export default Shadowing;
