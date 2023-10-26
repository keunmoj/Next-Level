import React, { useState, useRef, useEffect } from "react";

function SingGame() {
  const answer = "널 알기 전까지는 나 의미 없었어 전부 다";
  const initials = "ㄴ ㅇㄱ ㅈㄲㅈㄴ ㄴ ㅇㅁ ㅇㅇㅇ ㅈㅂ ㄷ";
  const [userInputs, setUserInputs] = useState<string[]>(
    answer.split("").map((char) => (char === " " ? " " : ""))
  );
  const [extraInput, setExtraInput] = useState("");
  const [initialHintsActive, setInitialHintsActive] = useState(false);
  const [activeHintsCount, setActiveHintsCount] = useState(0);
  const [letterHintActive, setLetterHintActive] = useState(false);
  const [activeHintIndex, setActiveHintIndex] = useState(-1);

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

  return (
    <>
      <div>
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
      <input
        type="text"
        value={extraInput}
        onChange={(e) => setExtraInput(e.target.value)}
      />
      <button onClick={clearExtraInput}>초기화</button>
      <br />
      <button onClick={toggleInitialHints} disabled={initialHintsActive}>
        초성 힌트
      </button>
      <button onClick={toggleLetterHint} disabled={letterHintActive}>
        한글자 힌트
      </button>
      <br />
      <button onClick={checkAnswer}>정답 확인</button>
    </>
  );
}

export default SingGame;
