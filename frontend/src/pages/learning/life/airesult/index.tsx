import { useScenarioResultPostHook } from "@/hooks/scenario/useScenarioResultPostHook";
import audioBufferToWav from "audiobuffer-to-wav";
import { useCallback, useEffect, useState } from "react";
import {
  AiResult,
  AiResultButton,
  AiResultButtonContainer,
} from "./AiResult.styled";

const LearnAiResult = (props: any) => {
  const { getScenarioResult, eachScore } = useScenarioResultPostHook();

  const [stream, setStream] = useState<any>();
  const [media, setMedia] = useState<any>();
  const [onRec, setOnRec] = useState<boolean>(true);
  const [source, setSource] = useState<any>();
  const [analyser, setAnalyser] = useState<any>();
  const [audioUrl, setAudioUrl] = useState<any>();
  const chunks = []; // 오디오 청크 데이터를 저장할 배열
  const [sound, setSound] = useState<any>();

  // 녹음
  const onRecAudio = () => {
    const audioCtx = new AudioContext();
    const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    const makeSound = (stream: any) => {
      const source = audioCtx.createMediaStreamSource(stream);
      setSource(source);

      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    };

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.addEventListener("dataavailable", (e) => {
          chunks.push(e.data);
        });

        mediaRecorder.start();
        setStream(stream);
        setMedia(mediaRecorder);
        makeSound(stream);
        analyser.onaudioprocess = function () {
          setOnRec(false);
        };
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  // 녹음 정지
  const offRecAudio = () => {
    media.ondataavailable = function (e: any) {
      chunks.push(e.data);
      setAudioUrl(e.data);
      setOnRec(true);
    };

    stream.getAudioTracks().forEach(function (track: any) {
      track.stop();
    });

    media.stop();

    analyser.disconnect();
    source.disconnect();
  };

  // 녹음확인
  const [playURL, setPlayURL] = useState<boolean>(false);

  const onSubmitAudioFile = useCallback(() => {
    if (audioUrl) {
      setPlayURL(!playURL);
      const audio = new Audio(URL.createObjectURL(audioUrl));

      audio.play();
    }
  }, [audioUrl, playURL]);

  //녹음 전송
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const sendToserverFun = useCallback(async () => {
    if (audioUrl) {
      setIsClicked(!isClicked);
      setSound(URL.createObjectURL(audioUrl));
      const arrayBuffer = await audioUrl.arrayBuffer();
      const audioContext = new AudioContext();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      const wav = audioBufferToWav(audioBuffer);

      const wavFile = new File([wav], "sound", { type: "audio/wav" });

      const formdata = new FormData();
      formdata.append("wavFile", wavFile);
      formdata.append("script", props.script);

      getScenarioResult(formdata);
    } else {
      console.log("녹음한 적이 없음");
    }
  }, [audioUrl]);

  return (
    <AiResult>
      <AiResultButtonContainer onClick={onRec ? onRecAudio : offRecAudio}>
        {onRec ? (
          <AiResultButton src="/scenario/record.svg" />
        ) : (
          <AiResultButton src="/scenario/stop.svg" />
        )}
      </AiResultButtonContainer>
      {audioUrl ? (
        <AiResultButtonContainer>
          {playURL ? (
            <AiResultButton src="/scenario/pause.svg" />
          ) : (
            <AiResultButton
              src="/scenario/play.svg"
              onClick={onSubmitAudioFile}
            />
          )}
        </AiResultButtonContainer>
      ) : (
        <AiResultButtonContainer>
          <AiResultButton src="/scenario/play.svg" />
          {/* 회색 */}
        </AiResultButtonContainer>
      )}

      {audioUrl ? (
        <AiResultButtonContainer onClick={sendToserverFun}>
          <AiResultButton src="/scenario/send.svg" />
        </AiResultButtonContainer>
      ) : (
        <AiResultButtonContainer>
          <AiResultButton src="/scenario/graysend.svg" />
        </AiResultButtonContainer>
      )}
    </AiResult>
  );
};

export default LearnAiResult;
