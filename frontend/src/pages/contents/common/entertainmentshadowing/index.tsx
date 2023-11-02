import { useParams } from "react-router-dom";
import Youtube from "./youtube";

import { useEffect, useState } from "react";
import { useEnterYoutubeHook } from "@/hooks/entertainment/useEnterYoutubeHook";
import { StyledContentPage } from "./Shadowing.styled";

const Shadowing = () => {
  const { id } = useParams();

  return (
    <StyledContentPage>
      <Youtube id={id} />
    </StyledContentPage>
  );
};

export default Shadowing;
