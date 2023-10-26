import React, { useRef, useState } from "react";

const Record = (props: any) => {
  const [recording, setRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [audioURL, setAudioURL] = useState<string | null>(null);

  const mediaStream = useRef<MediaStream | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      mediaStream.current = stream;
      const chunks: Blob[] = []; // 수정: 녹음 중인 오디오를 저장하기 위한 배열

      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };
      recorder.onstop = () => {
        const audioBlob = new Blob(chunks, { type: "audio/wav" });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
      };

      recorder.start();
      setRecording(true);
      mediaRecorder.current = recorder; // 수정: 미디어 레코더 레퍼런스 설정

      // 녹음 실행 시 해당 시간으로 이동 후 동영상 멈춤
      props.moveTime(props.data.time);
      props.player.pauseVideo();
    });
  };

  const stopRecording = () => {
    if (mediaStream.current) {
      mediaStream.current.getTracks().forEach((track) => {
        track.stop();
      });
    }
    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
    }
    setRecording(false);
  };

  const playRecording = () => {
    if (audioURL) {
      // 녹음 재생 시 해당 시간으로 이동 후 동영상 멈춤
      props.moveTime(props.data.time);
      props.player.pauseVideo();
      const audio = new Audio(audioURL);
      audio.play();
    } else {
      console.warn("녹음된 오디오가 없습니다.");
    }
  };

  return (
    <div>
      {recording ? (
        <button onClick={stopRecording}>Stop Recording</button>
      ) : (
        <button onClick={startRecording}>Start Recording</button>
      )}
      {audioURL && <button onClick={playRecording}>녹음 듣기</button>}
    </div>
  );
};

export default Record;
