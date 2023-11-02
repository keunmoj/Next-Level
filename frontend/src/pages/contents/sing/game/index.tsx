import React, { useState, useRef, useEffect, useCallback } from "react";
import YouTube, { YouTubeProps, YouTubePlayer } from "react-youtube";
import Modal from "react-modal";
import {
  StyledGame,
  StyledGameImage,
  StyledGameNav,
  StyledGameNavLife,
  StyledGameNavLifeHeartImage,
  StyledGameNavLifeEmptyHeartImage,
  StyledGameNavExitImage,
  StyleGameTitleBox,
  StyledGameTitleHeadsetImage,
  StyledGameTitle,
  StyledGameContents,
  StyledGameContentsSpace,
  StyledGameContentsWordBox,
  StyledGameContentsWord,
  StyledGameWriteBox,
  StyledGameWriteHeader,
  StyledGameWriteHeaderHintImage,
  StyledGameWriteHeaderHint,
  StyledGameWriteHeaderHintButton,
  StyledGameWriteContentBox,
  StyledGameWriteContent,
  StyledGameWriteReset,
  StyledGameWriteCheck,
} from "./Game.styled";
import GameOverModal from "./modal";

function SingGame() {
  const answer = "널 알기 전까지는 나 의미 없었어 전부 다 내 맘이";
  const initials = "ㄴ ㅇㄱ ㅈㄲㅈㄴ ㄴ ㅇㅁ ㅇㅇㅇ ㅈㅂ ㄷ ㄴ ㅁㅇ";
  const [lives, setLives] = useState(2);
  const [gameState, setGameState] = useState("wrongAnswer");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const colors = ["#F6D5C7", "#85C687", "#85A6C6", "#BDC685", "#E6CC73"];
  let lastColors = ["", ""];
  const [userInputs, setUserInputs] = useState<string[]>(
    answer.split("").map((char) => (char === " " ? " " : ""))
  );
  const [extraInput, setExtraInput] = useState("");
  const [replayHintsActive, setRepeatHintsActive] = useState(false);
  const [initialHintsActive, setInitialHintsActive] = useState(false);
  const [activeHintsCount, setActiveHintsCount] = useState(0);
  const [letterHintActive, setLetterHintActive] = useState(false);
  const [activeHintIndex, setActiveHintIndex] = useState(-1);
  const [player, setPlayer] = useState<YouTubePlayer | null>(null);
  const startTime = 68;
  const endTime = 73;

  const handleGoBack = () => {
    window.history.back();
  };

  const getRandomColor = () => {
    let newColor;
    do {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (lastColors.includes(newColor)); // 이전 두 개의 색상과 중복되지 않는 새 색상을 찾을 때까지 반복

    lastColors = [lastColors[1], newColor]; // 새로운 색상을 추적하는 배열에 추가

    return newColor;
  };

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
      setGameState("correctAnswer");
    } else {
      setLives((prevLives) => {
        const newLives = prevLives - 1;
        return newLives;
      });
    }
    setIsModalOpen(true);
  };

  const handleModal = () => {
    setIsModalOpen(false);
    if (gameState == "correctAnswer") {
      window.history.back();
    } else {
      if (lives === 1) {
        playVideoWithDelay();
      } else if (lives === 0) {
        setIsGameOver(true);
      }
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

  const playVideo = useCallback(async () => {
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

        const audio1 = new Audio("/audio/noltoeffect.mp3");
        player.setVolume(50);
        audio1.play();

        audio1.onended = () => {
          player.seekTo(startTime, true);
          player.playVideo();
        };
      }
    }, 1000);
  }, [player]);

  const playVideoWithDelay = useCallback(() => {
    const timeoutId = setTimeout(() => {
      playVideo();
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [playVideo]);

  useEffect(() => {
    playVideoWithDelay();
  }, [playVideo]);

  const handleReplayClick = () => {
    if (!player) return;
    setRepeatHintsActive((prev) => !prev);
    const audio2 = new Audio("/audio/noltoeffect.mp3");
    player.setVolume(50);
    audio2.play();

    audio2.onended = () => {
      player.seekTo(startTime, true);
      player.playVideo();
    };
  };

  const handleGameOver = () => {
    setIsGameOver(false);
    window.history.back();
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
      <StyledGame>
        <div style={{ display: "none" }}>
          <YouTube videoId="sVTy_wmn5SU" opts={opts} onReady={onPlayerReady} />
        </div>
        <StyledGameNav>
          <StyledGameNavLife>
            {Array(lives)
              .fill(0)
              .map((_, index) => (
                <StyledGameNavLifeHeartImage key={index} />
              ))}
            {Array(2 - lives)
              .fill(0)
              .map((_, index) => (
                <StyledGameNavLifeEmptyHeartImage key={index + 300} />
              ))}
          </StyledGameNavLife>
          <StyledGameNavExitImage onClick={handleGoBack} />
        </StyledGameNav>
        <StyleGameTitleBox>
          <StyledGameTitleHeadsetImage />
          <StyledGameTitle>노래 제목</StyledGameTitle>
        </StyleGameTitleBox>
        <StyledGameContents>
          {answer.split("").map((char, index) =>
            char === " " ? (
              <StyledGameContentsSpace key={index + 100}>
                &nbsp;
              </StyledGameContentsSpace>
            ) : (
              <StyledGameContentsWordBox
                key={index + 200}
                style={{
                  background: getRandomColor(),
                }}
              >
                <StyledGameContentsWord
                  value={userInputs[index]}
                  onChange={(e) => handleInputChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onClick={() => handleClick(index)}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                />
              </StyledGameContentsWordBox>
            )
          )}
        </StyledGameContents>
        <StyledGameWriteBox>
          <StyledGameWriteHeader>
            <StyledGameWriteHeaderHintImage />
            <StyledGameWriteHeaderHint>HINT!</StyledGameWriteHeaderHint>
            <StyledGameWriteHeaderHintButton
              hintactive={replayHintsActive.toString()}
              onClick={handleReplayClick}
              disabled={replayHintsActive}
            >
              다시 듣기
            </StyledGameWriteHeaderHintButton>
            <StyledGameWriteHeaderHintButton
              hintactive={initialHintsActive.toString()}
              onClick={toggleInitialHints}
              disabled={initialHintsActive}
            >
              초성x2
            </StyledGameWriteHeaderHintButton>
            <StyledGameWriteHeaderHintButton
              hintactive={letterHintActive.toString()}
              onClick={toggleLetterHint}
              disabled={letterHintActive}
            >
              한글자
            </StyledGameWriteHeaderHintButton>
          </StyledGameWriteHeader>
          <StyledGameWriteContentBox>
            <StyledGameWriteContent
              value={extraInput}
              onChange={(e) => setExtraInput(e.target.value)}
            />
            <div>
              <StyledGameWriteReset onClick={clearExtraInput}>
                다시 쓰기
              </StyledGameWriteReset>
              <StyledGameWriteCheck onClick={checkAnswer}>
                정답 확인
              </StyledGameWriteCheck>
            </div>
          </StyledGameWriteContentBox>
        </StyledGameWriteBox>
      </StyledGame>
      <GameOverModal
        isOpen={isModalOpen}
        onClose={handleModal}
        gameStatus={gameState}
      />
      <GameOverModal
        isOpen={isGameOver}
        onClose={handleGameOver}
        gameStatus="gameOver"
      />
      <StyledGameImage />
    </>
  );
}

export default SingGame;
