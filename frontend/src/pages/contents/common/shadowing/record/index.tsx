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
      mediaRecorder.current = new MediaRecorder(stream);
      mediaRecorder.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          setAudioChunks((chunks) => [...chunks, e.data]);
        }
      };
      mediaRecorder.current.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
      };

      mediaRecorder.current.start();
      setRecording(true);
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

  return (
    <div>
      {recording ? (
        <button onClick={stopRecording}>Stop Recording</button>
      ) : (
        <button onClick={startRecording}>Start Recording</button>
      )}
      {audioURL && (
        <audio controls>
          <source src={audioURL} type="audio/wav" />
        </audio>
      )}
    </div>
  );
};

export default Record;
