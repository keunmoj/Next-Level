import { useParams } from "react-router-dom";
import Youtube from "./youtube";
import { StyledContentPage } from "./Shadowing.styled";
import { useSpeechRecognition } from "react-speech-recognition";
import { useEffect } from "react";
const Shadowing = () => {
  const { browserSupportsSpeechRecognition } = useSpeechRecognition();
  const { id } = useParams();
  useEffect(() => {
    alert("녹음녹음녹음");
  }, [browserSupportsSpeechRecognition]);
  return (
    <StyledContentPage>
      <Youtube id={id} />
    </StyledContentPage>
  );
};

export default Shadowing;
