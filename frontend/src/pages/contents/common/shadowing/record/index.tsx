import ApexChart from "../apexchart";
import { useRecordHook } from "@/hooks/drama/useRecordHook";
const Record = (props: any) => {
  const {
    recording,
    audioURL,
    myPitchList,
    startRecording,
    stopRecording,
    playRecording,
  } = useRecordHook();
  return (
    <div>
      {recording ? (
        <button onClick={stopRecording}>Stop Recording</button>
      ) : (
        <button onClick={() => startRecording(props.data.time)}>
          Start Recording
        </button>
      )}
      {audioURL && (
        <button onClick={() => playRecording(props.data.time)}>
          녹음 듣기
        </button>
      )}
      <ApexChart moviePitchList={[]} myPitchList={myPitchList} />
    </div>
  );
};

export default Record;
