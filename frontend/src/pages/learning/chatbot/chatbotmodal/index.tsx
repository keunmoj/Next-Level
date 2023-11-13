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
} from "./ChatbotModal.styled";
import { useNavigate } from "react-router-dom";
import { useChatbotHook } from "@/hooks/chatbot/useChatbotHook";
import { useTranslation } from "react-i18next";

const ChatbotModal = (props: any) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { firstQuestion, getChatbot } = useChatbotHook();
  const [goChatpageQuestion, setGoChatpageQuestion] = useState();

  useEffect(() => {
    console.log(firstQuestion);
  }, []);

  const goChatPage = () => {
    getChatbot(goChatpageQuestion);
  };

  useEffect(() => {
    if (firstQuestion) {
      console.log(firstQuestion);
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
        <StyledChatbotModalbody>
          <StyledChatbotModalImage src={props.imgsrc} alt="img" />
          <StyledChatbotModalTitle>
            {t('learning.direct.topic')}
          </StyledChatbotModalTitle>
          <StyledChatbotModalContent>
          {t('learning.direct.input')}
          </StyledChatbotModalContent>
        </StyledChatbotModalbody>
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
      </StyledChatbotModalWindow>
    </StyledChatbotModalPage>
  );
};

export default ChatbotModal;
