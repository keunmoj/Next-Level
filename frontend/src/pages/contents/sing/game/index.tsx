import React, { useState, useRef, useEffect } from "react";
import YouTube, { YouTubeProps, YouTubePlayer } from "react-youtube";
import Modal from "react-modal";
import "./SingGame.css";

function SingGame() {
  const answer = "널 알기 전까지는 나 의미 없었어 전부 다 내 맘이";
  const initials = "ㄴ ㅇㄱ ㅈㄲㅈㄴ ㄴ ㅇㅁ ㅇㅇㅇ ㅈㅂ ㄷ ㄴ ㅁㅇ";
  const [lives, setLives] = useState(2);
  const [isGameOver, setIsGameOver] = useState(false);
  const [userInputs, setUserInputs] = useState<string[]>(
    answer.split("").map((char) => (char === " " ? " " : ""))
  );
  const [extraInput, setExtraInput] = useState("");
  const [repeatHintsActive, setRepeatHintsActive] = useState(false);
  const [initialHintsActive, setInitialHintsActive] = useState(false);
  const [activeHintsCount, setActiveHintsCount] = useState(0);
  const [letterHintActive, setLetterHintActive] = useState(false);
  const [activeHintIndex, setActiveHintIndex] = useState(-1);
  const [player, setPlayer] = useState<YouTubePlayer | null>(null);
  const startTime = 68;
  const endTime = 73;

  const toggleInitialHints = () => {
    setInitialHintsActive((prev) => !prev);
  };

  const toggleLetterHint = () => {
    setLetterHintActive(true);
  };

  const increaseActiveHintsCount = () => {
    setActiveHintsCount((prev) => prev + 1);
  };

  const clearExtraInput = () => {
    setExtraInput("");
  };

  const inputRefs = useRef<Array<HTMLInputElement | null>>(
    Array.from({ length: answer.length }, () => null)
  );

  useEffect(() => {
    const newInputs = [...userInputs];
    const splitExtraInput = extraInput.replace(/\s/g, "").split("");

    let index = 0;
    for (let input of splitExtraInput) {
      while (newInputs[index] === " ") {
        index++;
      }
      if (index < newInputs.length) {
        newInputs[index] = input;
      }
      index++;
    }

    for (let i = index; i < newInputs.length; i++) {
      if (newInputs[i] !== " ") {
        newInputs[i] = "";
      }
    }

    setUserInputs(newInputs);
  }, [extraInput]);

  const checkAnswer = () => {
    const userInput = userInputs.join("");
    if (userInput === answer) {
      alert("정답입니다!");
    } else {
      alert("틀렸습니다!");
      setLives((prevLives) => {
        const newLives = prevLives - 1;
        if (newLives === 0) {
          setIsGameOver(true); // 하트가 모두 소진되면 게임을 종료합니다.
        }
        return newLives;
      });
    }
  };

  const handleClick = (index: number) => {
    if (initialHintsActive && activeHintsCount < 2) {
      const initial = initials.split("")[index];
      alert(`이 자리에 들어갈 초성은 '${initial}' 입니다.`);
      increaseActiveHintsCount();
    }

    if (letterHintActive && activeHintIndex === -1) {
      const letter = answer[index];
      setActiveHintIndex(index);
      const newInputs = [...userInputs];
      newInputs[index] = letter;
      setUserInputs(newInputs);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    setUserInputs((prevInputs) => {
      const newInputs = [...prevInputs];
      newInputs[index] = value;
      return newInputs;
    });
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let nextIndex = index + 1;
      while (nextIndex < answer.length && answer[nextIndex] === " ") {
        nextIndex++;
      }
      const nextInput = inputRefs.current[nextIndex];
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    setPlayer(event.target);
  };

  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = async () => {
    if (!player) return;
    setIsPlaying(true);
    player.seekTo(startTime - 10, true);
    player.setVolume(30);
    player.playVideo();

    const checkTime = setInterval(async () => {
      const currentTime = await player.getCurrentTime();
      if (currentTime >= startTime) {
        player.pauseVideo();
        clearInterval(checkTime);

        const audio = new Audio("/audio/noltoeffect.mp3");
        player.setVolume(50);
        audio.play();

        audio.onended = () => {
          player.seekTo(startTime, true);
          player.playVideo();
        };
      }
    }, 1000);
  };

  const handleRepeatClick = () => {
    if (!player) return;
    setRepeatHintsActive((prev) => !prev);
    player.seekTo(startTime, true);
    player.playVideo();
  };

  const handleGameOver = () => {
    setIsGameOver(false);
    window.history.back(); // 이전 페이지로 돌아갑니다.
  };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
      start: startTime,
      end: endTime,
      controls: 0,
      disablekb: 1,
      fs: 0,
      rel: 0,
    },
  };

  return (
    <>
      <div style={{ display: "none" }}>
        <YouTube videoId="sVTy_wmn5SU" opts={opts} onReady={onPlayerReady} />
      </div>
      <button onClick={playVideo} disabled={isPlaying}>
        재생
      </button>
      <div className="life-container">
        {Array(lives)
          .fill(0)
          .map((_, index) => (
            <img key={index} src="/sing/heart.svg" alt="life" />
          ))}
        {Array(2 - lives)
          .fill(0)
          .map((_, index) => (
            <img key={index + lives} src="/sing/empty_heart.svg" alt="life" />
          ))}
      </div>
      <h1 className="title">노래 맞추기 게임</h1>
      <div className="hint-container">
        <button
          className="hint-btn"
          onClick={handleRepeatClick}
          disabled={repeatHintsActive}
        >
          다시 듣기
        </button>
        <button
          className="hint-btn"
          onClick={toggleInitialHints}
          disabled={initialHintsActive}
        >
          초성 2개 힌트
        </button>
        <button
          className="hint-btn"
          onClick={toggleLetterHint}
          disabled={letterHintActive}
        >
          한글자 힌트
        </button>
      </div>
      <div className="input-container">
        {answer.split("").map((char, index) =>
          char === " " ? (
            <span
              key={index}
              style={{ display: "inline-block", width: "20px" }}
            >
              &nbsp;
            </span>
          ) : (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={userInputs[index]}
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onClick={() => handleClick(index)}
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={{ width: "20px" }}
            />
          )
        )}
      </div>
      <div className="extra-input-container">
        <textarea
          style={{
            width: "100vw",
            height: "20vh",
            fontSize: "30px",
            textAlign: "center",
          }}
          value={extraInput}
          onChange={(e) => setExtraInput(e.target.value)}
        />
      </div>
      <button onClick={clearExtraInput}>초기화</button>
      <button onClick={checkAnswer}>정답 확인</button>
      <Modal
        isOpen={isGameOver}
        onRequestClose={handleGameOver}
        ariaHideApp={false}
      >
        <h2>게임 종료</h2>
        <p>하트가 모두 소진되어 게임이 종료되었습니다.</p>
        <button onClick={handleGameOver}>확인</button>
      </Modal>
    </>
  );
}

export default SingGame;
