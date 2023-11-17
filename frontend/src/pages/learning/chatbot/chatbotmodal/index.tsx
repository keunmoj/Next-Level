import { useEffect, useState } from "react";
import {
  StyledChatbotModalPage,
  StyledChatbotModalWindow,
  StyledChatbotModalbody,
  StyledChatbotModalTitle,
  StyledChatbotModalContent,
  StyledChatbotModalImage,
  StyledChatbotModalInputContainer,
  StyledChatbotModalInput,
  StyledChatbotModalImg,
  StyledChatbotModalX,
  StyledChatbotModalBottom,
  StyledChatbotModalButton,
  StyledChatbotModalButtonContainer,
} from "./ChatbotModal.styled";
import { useNavigate } from "react-router-dom";
import { useChatbotHook } from "@/hooks/chatbot/useChatbotHook";
import { useTranslation } from "react-i18next";

const ChatbotModal = (props: any) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { firstQuestion, getChatbot } = useChatbotHook();
  const [goChatpageQuestion, setGoChatpageQuestion] = useState();

  const goChatPage = () => {
    getChatbot(goChatpageQuestion);
  };

  useEffect(() => {
    if (firstQuestion) {
      navigate("/learning/chatbot", {
        state: {
          firstQuestion: firstQuestion,
          subject: goChatpageQuestion,
        },
      });
    }
  }, [firstQuestion]);

  return (
    <StyledChatbotModalPage onClick={props.closeModal}>
      <StyledChatbotModalWindow onClick={(e: any) => e.stopPropagation()}>
        <StyledChatbotModalX onClick={props.closeModal}>X</StyledChatbotModalX>
        {/* <StyledChatbotModalImage src={props.imgsrc} alt="img" /> */}
        <StyledChatbotModalbody>
          <StyledChatbotModalImage src={props.imgsrc} alt="img" />
          <StyledChatbotModalTitle>
            {t('learning.direct.topic')}
          </StyledChatbotModalTitle>
          <StyledChatbotModalContent>
          {t('learning.direct.input')}
          </StyledChatbotModalContent>
        </StyledChatbotModalbody>
        <StyledChatbotModalBottom>
          <StyledChatbotModalInputContainer>
            <StyledChatbotModalInput
              onChange={(e: any) => setGoChatpageQuestion(e.target.value)}
            />
            <StyledChatbotModalImg
              src="/chat/send.png"
              alt="send"
              onClick={goChatPage}
            />
          </StyledChatbotModalInputContainer>
        </StyledChatbotModalBottom>
        {/* <StyledChatbotModalButtonContainer>
          <StyledChatbotModalButton onClick={goChatPage}>
            제출
          </StyledChatbotModalButton>
          <StyledChatbotModalButton onClick={props.closeModal}>
            취소
          </StyledChatbotModalButton>
        </StyledChatbotModalButtonContainer> */}
      </StyledChatbotModalWindow>
    </StyledChatbotModalPage>
  );
};

export default ChatbotModal;
