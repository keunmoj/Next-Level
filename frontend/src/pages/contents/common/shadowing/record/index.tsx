import React, { useRef, useState } from "react";
import ApexChart from "../apexchart";
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

      // analyzeMicrophone(mediaStream.current);///////////////////////////////////
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

  ///////////////////////
  const [myPitchList, setMyPitchList] = useState<number[]>([]);
  const analyzeMicrophone = (stream: MediaStream) => {
    const audioCtx = new AudioContext();
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 4096;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    let previousValueToDisplay: number | null = null;
    let smoothingCount = 0;
    const smoothingThreshold = 10;
    const smoothingCountThreshold = 5;

    const source = audioCtx.createMediaStreamSource(stream);
    source.connect(analyser);
    const recordingTimer = setInterval(() => {
      analyser.getByteTimeDomainData(dataArray);
      const pitch = autoCorrelate(dataArray, audioCtx.sampleRate);
      // console.log("pitch", Math.round(pitch));

      if (pitch === -1) {
        // console.log('Too quiet...');
        return;
      }

      let valueToDisplay = Math.round(pitch);
      if (
        previousValueToDisplay !== null &&
        Math.abs(valueToDisplay - previousValueToDisplay) < smoothingThreshold
      ) {
        if (smoothingCount < smoothingCountThreshold) {
          smoothingCount++;
          return;
        } else {
          previousValueToDisplay = valueToDisplay;
          smoothingCount = 0;
        }
      } else {
        previousValueToDisplay = valueToDisplay;
        smoothingCount = 0;
      }

      setMyPitchList((data) => [...data, valueToDisplay]);
    }, 50);

    setTimeout(() => {
      clearInterval(recordingTimer);
    }, props.duration);
  };
  ////////////////////////////
  return (
    <div>
      {recording ? (
        <button onClick={stopRecording}>Stop Recording</button>
      ) : (
        <button onClick={startRecording}>Start Recording</button>
      )}
      {audioURL && <button onClick={playRecording}>녹음 듣기</button>}
      <ApexChart moviePitchList={[]} myPitchList={myPitchList} />
    </div>
  );

  ////////////////
  function autoCorrelate(buffer: Uint8Array, sampleRate: number) {
    const SIZE = buffer.length;
    const sumOfSquares = buffer.reduce((sum, val) => sum + val * val, 0);
    const rootMeanSquare = Math.sqrt(sumOfSquares / SIZE);

    if (rootMeanSquare < 0.01) {
      return -1;
    }

    let r1 = 0;
    let r2 = SIZE - 1;
    const threshold = 0.2;

    for (let i = 0; i < SIZE / 2; i++) {
      if (Math.abs(buffer[i]) < threshold) {
        r1 = i;
        break;
      }
    }

    for (let i = 1; i < SIZE / 2; i++) {
      if (Math.abs(buffer[SIZE - i]) < threshold) {
        r2 = SIZE - i;
        break;
      }
    }

    buffer = buffer.slice(r1, r2);
    const newSize = buffer.length;

    const c = new Array(newSize).fill(0);

    for (let i = 0; i < newSize; i++) {
      for (let j = 0; j < newSize - i; j++) {
        c[i] += buffer[j] * buffer[j + i];
      }
    }

    let d = 0;
    while (c[d] > c[d + 1]) {
      d++;
    }

    let maxValue = -1;
    let maxIndex = -1;
    for (let i = d; i < newSize; i++) {
      if (c[i] > maxValue) {
        maxValue = c[i];
        maxIndex = i;
      }
    }

    let T0 = maxIndex;

    const x1 = c[T0 - 1];
    const x2 = c[T0];
    const x3 = c[T0 + 1];

    const a = (x1 + x3 - 2 * x2) / 2;
    const b = (x3 - x1) / 2;

    if (a) {
      T0 -= b / (2 * a);
    }

    return sampleRate / T0;
  }
  ///////////////////
};

export default Record;
