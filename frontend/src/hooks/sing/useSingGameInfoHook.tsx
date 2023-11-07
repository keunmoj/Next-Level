import SingGameInfoGet from "@/api/sing/SingGameInfoGet";
import { YouTubeProps, YouTubePlayer } from "react-youtube";
import { useState, useEffect, useCallback, useRef } from "react";
import { useParams } from "react-router-dom";
import SingGameScorePost from "@/api/sing/SingGameScorePost";

export const useSingGameInfoHook = () => {
  const { id } = useParams();
  const [song, setSong] = useState<any>();
  const [lives, setLives] = useState(2);
  const [gameState, setGameState] = useState("wrongAnswer");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const colors = ["#F6D5C7", "#85C687", "#85A6C6", "#BDC685", "#E6CC73"];
  let lastColors = ["", ""];
  const [userInputs, setUserInputs] = useState<string[]>([]);
  const [extraInput, setExtraInput] = useState("");
  const [totalHints, setTotalHints] = useState(1);
  const [usedHintsCount, setUsedHintsCount] = useState(0);
  const [replayHintsActive, setRepeatHintsActive] = useState(false);
  const [initialHintsActive, setInitialHintsActive] = useState(false);
  const [activeHintsCount, setActiveHintsCount] = useState(0);
  const [letterHintActive, setLetterHintActive] = useState(false);
  const [activeHintIndex, setActiveHintIndex] = useState(-1);
  const [player, setPlayer] = useState<YouTubePlayer | null>(null);

  const inputRefs = useRef<Array<HTMLInputElement | null>>(
    Array.from({ length: song ? song.script.length : 0 }, () => null)
  );

  const getSingGameInfo = async (singId: string) => {
    const res = await SingGameInfoGet(singId);
    setSong(res.data.songProblem);
  };

  useEffect(() => {
    getSingGameInfo(`${id}`);
  }, []);

  useEffect(() => {
    if (song) {
      setUserInputs(
        song.script.split("").map((char: any) => (char === " " ? " " : ""))
      );
    }
  }, [song]);

  useEffect(() => {
    if (lives === 2) {
      setTotalHints(1);
    } else if (lives === 1) {
      setTotalHints(1);
    }
  }, [lives]);

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

  const decreaseTotalHints = () => {
    setTotalHints((prevHints) => prevHints - 1);
    setUsedHintsCount(usedHintsCount + 1);
  };

  const toggleInitialHints = () => {
    if (totalHints > 0) {
      setInitialHintsActive((prev) => !prev);
      decreaseTotalHints();
    } else {
      alert("힌트는 라운드당 1회 사용가능합니다.");
    }
  };

  const toggleLetterHint = () => {
    if (totalHints > 0) {
      setLetterHintActive(true);
      decreaseTotalHints();
    } else {
      alert("힌트는 라운드당 1회 사용가능합니다.");
    }
  };

  const increaseActiveHintsCount = () => {
    setActiveHintsCount((prev) => prev + 1);
  };

  const clearExtraInput = () => {
    setExtraInput("");
  };

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
    if (userInput === song.script) {
      setGameState("correctAnswer");
    } else {
      setLives((prevLives) => {
        const newLives = prevLives - 1;
        return newLives;
      });
    }
    setIsModalOpen(true);
  };

  const handleModal = async () => {
    setIsModalOpen(false);
    if (gameState == "correctAnswer") {
      const score = 30 - usedHintsCount * 5 - (2 - lives) * 5;
      const request = { songProblemId: song.songProblemId, score: score };
      const res = await SingGameScorePost(request);
      console.log(res);
      if (res.status !== 200) {
        alert("서버 연결상태가 원활하지 않습니다.");
      }
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
      const initial = song.initial.split("")[index];
      alert(`이 자리에 들어갈 초성은 '${initial}' 입니다.`);
      increaseActiveHintsCount();
    }

    if (letterHintActive && activeHintIndex === -1) {
      const letter = song.script[index];
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
      while (nextIndex < song.script.length && song.script[nextIndex] === " ") {
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

  const playVideo = useCallback(async () => {
    if (!player) return;
    player.seekTo(song.songStartTime - 10, true);
    player.setVolume(30);
    player.playVideo();

    const playEffectSound = () => {
      player.pauseVideo();
      const audio1 = new Audio("/audio/noltoeffect.mp3");
      audio1.play();

      audio1.onended = () => {
        player.setVolume(50);
        player.seekTo(song.songStartTime, true);
        player.playVideo();
      };
    };

    // 10초 후에 효과음 재생
    setTimeout(playEffectSound, 10 * 1000);
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
    if (totalHints > 0) {
      setRepeatHintsActive((prev) => !prev);
      const audio2 = new Audio("/audio/noltoeffect.mp3");
      player.setVolume(50);
      audio2.play();

      audio2.onended = () => {
        player.seekTo(song.songStartTime, true);
        player.playVideo();
      };
      decreaseTotalHints();
    } else {
      alert("힌트는 라운드당 1회 사용가능합니다.");
    }
  };

  const handleGameOver = () => {
    setIsGameOver(false);
    window.history.back();
  };

  return {
    song,
    lives,
    gameState,
    isModalOpen,
    isGameOver,
    userInputs,
    extraInput,
    setExtraInput,
    replayHintsActive,
    initialHintsActive,
    letterHintActive,
    inputRefs,
    handleGameOver,
    handleReplayClick,
    onPlayerReady,
    handleKeyDown,
    handleInputChange,
    handleClick,
    checkAnswer,
    clearExtraInput,
    toggleLetterHint,
    toggleInitialHints,
    getRandomColor,
    handleGoBack,
    handleModal,
  };
};
