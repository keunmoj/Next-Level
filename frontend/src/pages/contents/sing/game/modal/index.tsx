import { useEffect, useState } from "react";
import {
  StyledModalPage,
  StyledModalWindow,
  StyledModalbody,
  StyledModalTitle,
  StyledModalContent,
  StyledModalButtonContainer,
  StyledModalButton,
} from "./Modal.styled";
import { useTranslation } from "react-i18next";

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
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    let timer: any;
    if (gameStatus === "correctAnswer") {
      timer = setTimeout(() => {
        setShowModal(true);
      }, 1000);
    } else {
      setShowModal(isOpen);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isOpen, gameStatus]);

  const getTitle = () => {
    switch (gameStatus) {
      case "gameOver":
        return t('contents.sing.game.modal.title.gameOver');
      case "wrongAnswer":
        return t('contents.sing.game.modal.title.wrongAnswer');
      case "correctAnswer":
        return t('contents.sing.game.modal.title.correctAnswer');
      default:
        return "";
    }
  };

  const getContent = () => {
    switch (gameStatus) {
      case "gameOver":
        return t('contents.sing.game.modal.text.gameOver');
      case "wrongAnswer":
        return (
          t('contents.sing.game.modal.text.wrongAnswer')
        );
      case "correctAnswer":
        return (
          t('contents.sing.game.modal.text.correctAnswer')
        );
      default:
        return "";
    }
  };

  return (
    <StyledModalPage
      isOpen={showModal}
      onRequestClose={onClose}
      ariaHideApp={false}
    >
      <StyledModalWindow onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <StyledModalbody>
          <StyledModalTitle>{getTitle()}</StyledModalTitle>
          <StyledModalContent>{getContent()}</StyledModalContent>
        </StyledModalbody>
        <StyledModalButtonContainer>
          <StyledModalButton onClick={onClose}>
            {t('contents.shadowing.closeMent')}
          </StyledModalButton>
        </StyledModalButtonContainer>
      </StyledModalWindow>
    </StyledModalPage>
  );
};

export default GameOverModal;
