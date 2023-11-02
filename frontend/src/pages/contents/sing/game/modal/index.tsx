import {
  StyledModalPage,
  StyledModalWindow,
  StyledModalbody,
  StyledModalTitle,
  StyledModalContent,
  StyledModalButtonContainer,
  StyledModalButton,
} from "./Modal.styled";

interface GameOverModalProps {
  isOpen: boolean;
  onClose: () => void;
  gameStatus: string;
}

const GameOverModal: React.FC<GameOverModalProps> = ({
  isOpen,
  onClose,
  gameStatus,
}) => {
  const getTitle = () => {
    switch (gameStatus) {
      case "gameOver":
        return "게임 종료";
      case "wrongAnswer":
        return "오답";
      case "correctAnswer":
        return "정답";
      default:
        return "";
    }
  };

  const getContent = () => {
    switch (gameStatus) {
      case "gameOver":
        return "하트가 모두 소진되어 게임이 종료되었습니다.";
      case "wrongAnswer":
        return (
          <>
            틀린 답변입니다.
            <br />
            다시 시도해주세요.
          </>
        );
      case "correctAnswer":
        return (
          <>
            축하합니다!
            <br />
            정답입니다.
          </>
        );
      default:
        return "";
    }
  };

  return (
    <StyledModalPage
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
    >
      <StyledModalWindow onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <StyledModalbody>
          <StyledModalTitle>{getTitle()}</StyledModalTitle>
          <StyledModalContent>{getContent()}</StyledModalContent>
        </StyledModalbody>
        <StyledModalButtonContainer>
          <StyledModalButton onClick={onClose}>확인</StyledModalButton>
        </StyledModalButtonContainer>
      </StyledModalWindow>
    </StyledModalPage>
  );
};

export default GameOverModal;
