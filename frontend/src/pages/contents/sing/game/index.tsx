import YouTube, { YouTubeProps } from "react-youtube";
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
import { useSingGameInfoHook } from "@/hooks/sing/useSingGameInfoHook";

function SingGame() {
  const {
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
  } = useSingGameInfoHook();
  // 여기 있어야하는 것들
  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
      start: song ? song.songStartTime : 0,
      end: song ? song.songEndTime : 0,
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
          {song && (
            <YouTube
              videoId={song.videoId}
              opts={opts}
              onReady={onPlayerReady}
            />
          )}
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
          <StyledGameTitle>{song && song.songTitle}</StyledGameTitle>
        </StyleGameTitleBox>
        <StyledGameContents>
          {song &&
            song.script.split("").map((char: any, index: number) =>
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
