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
import { FireCracker } from "@/components/firecracker";
import { S3_ADDRESS } from "@/api/api";
import { useTranslation } from "react-i18next";

function SingGame() {
  const { t } = useTranslation();
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
    fireCrackerRef,
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
              {t('contents.sing.game.hint.again')}
            </StyledGameWriteHeaderHintButton>
            <StyledGameWriteHeaderHintButton
              hintactive={initialHintsActive.toString()}
              onClick={toggleInitialHints}
              disabled={initialHintsActive}
            >
              {t('contents.sing.game.hint.initial')}
            </StyledGameWriteHeaderHintButton>
            <StyledGameWriteHeaderHintButton
              hintactive={letterHintActive.toString()}
              onClick={toggleLetterHint}
              disabled={letterHintActive}
            >
              {t('contents.sing.game.hint.letter')}
            </StyledGameWriteHeaderHintButton>
          </StyledGameWriteHeader>
          <StyledGameWriteContentBox>
            <StyledGameWriteContent
              value={extraInput}
              onChange={(e) => setExtraInput(e.target.value)}
            />
            <div>
              <StyledGameWriteReset onClick={clearExtraInput}>
                {t('contents.sing.game.complete.again')}
              </StyledGameWriteReset>
              <StyledGameWriteCheck onClick={checkAnswer}>
                {t('contents.sing.game.complete.check')}
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
      <StyledGameImage src={song && S3_ADDRESS + song.artist.image} />
      <div
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          left: "0px",
          top: "0px",
          zIndex: gameState === "correctAnswer" ? 0 : -1,
        }}
      >
        <FireCracker ref={fireCrackerRef} />
      </div>
    </>
  );
}

export default SingGame;
